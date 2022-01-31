import BigNumber from 'bignumber.js';

import {AVG_BLOCK_TIME} from '../configs';
import {DmexApi} from '../api';
import type {ApiCreateOrderQuery, ApiContractResponse} from '../api';
import {DmexWallet} from './wallet';
import {createOrderHash, createCancelOrderHash, createContractHash} from './hashes';
import {nextNonce} from '../utils';
import type {ClientParams, CreateOrderParams} from './types';
import type {ApiMinOrderAmountUserResponse} from '../api';
import {ClientError} from '../errors';

/**
 * DMEX API client
 */
export class DmexClient {
	public readonly api: DmexApi;
	public contractAddress: string;
	public wallet: DmexWallet;
	public readonly avgBlockTime: number;

	/**
	 * @param clientParams Client parameters
	 */
	constructor(clientParams: ClientParams) {
		this.api = new DmexApi(clientParams.apiParams);
		this.wallet = new DmexWallet(clientParams.walletPrivateKey);
		this.contractAddress = clientParams.contractAddress;
		this.avgBlockTime = clientParams.avgBlockTime ?? AVG_BLOCK_TIME;
	}

	/**
	 * Set active wallet (used for signatures and authentication)
	 *
	 * @param privateKey Wallet private key
	 */
	public setWallet(privateKey: string): void {
		this.wallet = new DmexWallet(privateKey);
	}

	/**
	 * Set active smart contract address
	 *
	 * @param contractAddress Futures smart contract address
	 */
	public setContractAddress(contractAddress: string): void {
		this.contractAddress = contractAddress;
	}

	/**
	 * Create order
	 *
	 * @param params Order parameters
	 * @return Created order hash
	 */
	public async createOrder(params: CreateOrderParams): Promise<string> {
		const createOrderParams = await this.prepareCreateOrder(params);

		await this.api.createOrder(createOrderParams);

		return createOrderParams.order_hash;
	}

	/**
	 * Cancel order
	 *
	 * @param orderHash Order hash
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
	 * Create order and futures contract simultaneously
	 *
	 * @param params Order and futures contract model
	 * @return Created order hash
	 */
	public async createOrderWithModelContract(params: CreateOrderParams): Promise<string> {
		const modelContract = await this.getContract(params.futures_contract_hash);
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

		const expirationBlock = Math.round(minOrder.block_number + (modelContract.expires_in_seconds / this.avgBlockTime));

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

	private async prepareCreateOrder(params: CreateOrderParams): Promise<ApiCreateOrderQuery> {
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

	private getContract(contractHash: string): Promise<ApiContractResponse> {
		return this.api.getContract(contractHash).then(res => res.data);
	}

	private getMultiplier(baseToken: string): Promise<string> {
		return this.api.getMultiplier({base_token: baseToken}).then(res => res.data.multiplier);
	}
}
