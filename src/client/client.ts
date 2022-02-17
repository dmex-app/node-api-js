import BigNumber from 'bignumber.js';

import type {
	ClientParams,
	CreateOrderWithContractHashParams,
	CreateOrderParams
} from './types';
import type {
	ApiCreateOrderQuery,
	ApiContractResponse,
	ApiMinOrderAmountUserResponse,
	ApiAssetResponse,
	ApiOrderbookResponse,
	ApiPositionResponse,
	ApiOpenPositionQuery
} from '../api';

import {DmexApi} from '../api';
import {nextNonce} from '../utils';
import {ClientError} from '../errors';
import {createOrderHash, createCancelOrderHash, createContractHash} from './hashes';
import {DmexWallet} from './wallet';

/**
 * DMEX API client.
 */
export class DmexClient {
	public readonly api: DmexApi;
	public contractAddress: string;
	public wallet: DmexWallet;

	/**
	 * @param clientParams Client parameters.
	 */
	constructor(clientParams: ClientParams) {
		this.api = new DmexApi(clientParams.apiParams);
		this.wallet = new DmexWallet(clientParams.walletPrivateKey);
		this.contractAddress = clientParams.contractAddress;
	}

	/**
	 * Set active wallet.
	 * The wallet is required for ETH signatures (for ex.: order creation) and user identification.
	 *
	 * @param privateKey Wallet private key.
	 */
	public setWallet(privateKey: string): void {
		this.wallet = new DmexWallet(privateKey);
	}

	/**
	 * Set active DMEX trading smart contract address.
	 *
	 * @param contractAddress DMEX trading smart contract address.
	 */
	public setContractAddress(contractAddress: string): void {
		this.contractAddress = contractAddress;
	}

	/**
	 * Creates a new order.
	 *
	 * @param params Order parameters.
	 * @returns Order hash.
	 */
	public async createOrder(params: CreateOrderParams): Promise<string> {
		const {data: baseToken} = params.margin_currency === undefined
			? await this.api.getDefaultBaseToken()
			: await this.api.getBaseTokenBySymbol(params.margin_currency);

		let expiresInSeconds = params.expires_seconds ?? -1;
		if (expiresInSeconds === -1) {
			expiresInSeconds = 31536000;
		}

		const asset = await this.getAssetBySymbolAndBaseToken(params.asset_symbol, baseToken.token_address);

		const positions = await this.getOpenPositions({
			futures_asset_hash: asset.futures_asset_hash,
			side: !params.side,
			contract_expires_in_seconds: expiresInSeconds,
			contract_margin: params.leverage
		});

		if (positions.length > 0) {
			return this.createOrderOnExistingContract({
				futures_contract_hash: positions[0].futures_contract_hash,
				amount: params.amount,
				leverage: params.leverage,
				price: params.price,
				side: params.side,
				stop_price: params.stop_price
			});
		}

		const modelContract = await this.getModelContract(
			asset.futures_asset_hash,
			expiresInSeconds,
			params.leverage
		);

		return this.createOrderOnNewContract({
			futures_contract_hash: modelContract.futures_contract_hash,
			amount: params.amount,
			leverage: params.leverage,
			price: params.price,
			side: params.side,
			stop_price: params.stop_price
		});
	}

	/**
	 * Cancels an active order.
	 *
	 * @param orderHash Order hash.
	 */
	public async cancelOrder(orderHash: string): Promise<void> {
		const nonce = nextNonce();

		const cancelHash = createCancelOrderHash({
			contract_address: this.contractAddress,
			order_hash: orderHash,
			user_address: this.wallet.getAddress(),
			nonce
		});

		const signValues = await this.wallet.signHash(cancelHash);

		await this.api.cancelOrder({
			contract_address: this.contractAddress,
			order_hash: orderHash,
			user_address: this.wallet.getAddress(),
			cancel_hash: cancelHash,
			nonce,
			...signValues
		});
	}

	/**
	 * Get order book.
	 *
	 * @param assetSymbol Asset symbol (ex.: ETH, BTC).
	 * @returns The orderbook.
	 */
	public getOrderbook(assetSymbol: string): Promise<ApiOrderbookResponse> {
		return this.api.getOrderbook({
			futures_asset_symbol: assetSymbol,
			user_address: this.wallet.getAddress()
		}).then(data => data.data);
	}

	/**
	 * Get user open positions.
	 *
	 * @param filters Optional filters.
	 * @returns Open positions.
	 */
	public getOpenPositions(filters?: Omit<ApiOpenPositionQuery, 'user_address'>) : Promise<ApiPositionResponse[]> {
		return this.api.getOpenPositions({
			...filters,
			user_address: this.wallet.getAddress()
		}).then(data => data.data);
	}

	private async createOrderOnExistingContract(params: CreateOrderWithContractHashParams): Promise<string> {
		const createOrderParams = await this.prepareCreateOrder(params);

		await this.api.createOrder(createOrderParams);

		return createOrderParams.order_hash;
	}

	private async createOrderOnNewContract(params: CreateOrderWithContractHashParams): Promise<string> {
		const {data: modelContract} = await this.api.getContract(params.futures_contract_hash);
		if (!modelContract.is_model) {
			throw new ClientError(`Specified futures contract is not an model contract (hash: ${params.futures_contract_hash})`);
		}

		const minOrder = await this.getMinOrderAmount();

		if (!modelContract.maintenance_margin) {
			throw new ClientError('"maintenance_margin" can not be undefined or null');
		}

		const maintenanceMargin = new BigNumber(modelContract.maintenance_margin)
			.times(minOrder.global_mm_multiplier)
			.times(minOrder.user_mm_multiplier)
			.toFixed(0);

		if (!modelContract.funding_rate) {
			throw new ClientError('"funding_rate" can not be undefined or null');
		}
		const fundingRate = new BigNumber(modelContract.funding_rate)
			.times(minOrder.global_fr_multiplier)
			.toFixed(0);

		const multiplier = await this.getMultiplier(modelContract.base_token);

		const expirationBlock = Math.round(minOrder.block_number + (modelContract.expires_in_seconds / minOrder.avg_block_time));

		const newContractHash = createContractHash({
			contract_address: modelContract.contract_address,
			asset_hash: modelContract.futures_asset_hash,
			expiration_block: expirationBlock,
			funding_rate: fundingRate,
			multiplier: multiplier,
			perpetual: false,
			maintenance_margin: maintenanceMargin
		});

		const createOrderProps = await this.prepareCreateOrder({
			amount: params.amount,
			price: params.price,
			side: params.side,
			stop_price: params.stop_price,
			futures_contract_hash: newContractHash,
			leverage: params.leverage
		});

		await this.api.createOrderWithModelContract({
			order: createOrderProps,
			contract: {
				contract_model_hash: modelContract.futures_contract_hash,
				expiration_block: expirationBlock,
				multiplier: multiplier,
				funding_rate: fundingRate,
				perpetual: false,
				maintenance_margin: maintenanceMargin,
				contract_hash: newContractHash
			}
		});

		return createOrderProps.order_hash;
	}

	private async prepareCreateOrder(params: CreateOrderWithContractHashParams): Promise<ApiCreateOrderQuery> {
		const nonce = nextNonce();

		const leverage = new BigNumber(params.leverage).shiftedBy(8).toFixed(0);

		const orderHash = createOrderHash({
			amount: params.amount,
			contract_address: this.contractAddress,
			futures_contract_hash: params.futures_contract_hash,
			leverage: leverage,
			price: params.price,
			side: params.side,
			user_address: this.wallet.getAddress(),
			nonce
		});

		const signValues = await this.wallet.signHash(orderHash);

		return {
			amount: params.amount,
			futures_contract_hash: params.futures_contract_hash,
			leverage: leverage,
			price: params.price,
			side: params.side,
			stop_price: params.stop_price,
			contract_address: this.contractAddress,
			user_address: this.wallet.getAddress(),
			order_hash: orderHash,
			nonce,
			...signValues
		};
	}

	private getMinOrderAmount(): Promise<ApiMinOrderAmountUserResponse> {
		return this.api.getMinOrderAmount({
			user_address: this.wallet.getAddress()
		}).then(res => res.data);
	}

	private getMultiplier(baseToken: string): Promise<string> {
		return this.api.getMultiplier({base_token: baseToken}).then(res => res.data.multiplier);
	}

	private getAssetBySymbolAndBaseToken(symbol: string, baseTokenAddr: string): Promise<ApiAssetResponse> {
		return this.api.getAssets({
			contract_address: this.contractAddress,
			symbol,
			base_token: baseTokenAddr,
			limit: 1
		}).then(res => {
			if (res.data.length !== 1) {
				throw new ClientError('Asset not found');
			}

			return res.data[0];
		});
	}

	private getModelContract(assetHash: string, expireInSeconds: number, leverage: number): Promise<ApiContractResponse> {
		return this.api.getContracts({
			futures_asset_hash: assetHash,
			expires_in_seconds: expireInSeconds,
			margin: leverage,
			is_model: true,
			is_hidden: false,
			limit: 1
		}).then(res => {
			if (res.data.length !== 1) {
				throw new ClientError('Contract not found');
			}

			return res.data[0];
		});
	}
}
