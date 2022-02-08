import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {version as packageVersion} from '../../package.json';

import {API_BASE_URL, HTTP_TIMEOUT_MS} from '../configs';
import type {
	ApiParams,
	ApiResponse,
	ApiErrorResponse,
	ApiCreateOrderQuery,
	ApiCreateOrderWithContractQuery,
	ApiCancelOrderQuery,
	ApiPingResponse,
	ApiMinOrderAmountQuery,
	ApiMinOrderAmountGuestResponse,
	ApiMinOrderAmountUserResponse,
	ApiContractFiltersQuery,
	ApiContractResponse,
	ApiContractMultiplierQuery,
	ApiContractMultiplierResponse,
	ApiBaseTokenResponse,
	ApiAssetQuery,
	ApiAssetResponse,
	ApiOpenPositionQuery,
	ApiPositionResponse
} from './types';
import {ApiError} from '../errors';

/**
 * DMEX API wrapper
 */
export class DmexApi {
	private readonly axios: AxiosInstance;

	/**
	 * Constructor
	 *
	 * @param baseURL DMEX API base URL (by default production API is used)
	 * @param timeout HTTP request timeout
	 */
	constructor({baseURL = API_BASE_URL, timeout = HTTP_TIMEOUT_MS}: ApiParams = {}) {
		this.axios = axios.create({
			baseURL: baseURL,
			timeout: timeout,
			headers: {
				'X-Dmex-Api-Lib-Version': packageVersion
			}
		});
	}

	/**
	 * Perform a http request to API base URL
	 *
	 * @param reqParams Request params
	 * @returns API response
	 */
	public async httpRequest<TR = ApiResponse>(reqParams: AxiosRequestConfig): Promise<TR> {
		return this.axios.request(reqParams)
			.then(res => res.data)
			.catch(err => DmexApi.handleApiError(err));
	}

	private static handleApiError(err: unknown): never {
		if (axios.isAxiosError(err)) {
			const axiosErr: AxiosError<ApiErrorResponse> = err;

			if (!axiosErr.response) {
				throw err;
			}

			const errResp = axiosErr.response.data;

			if (typeof errResp.errors === 'object' && errResp.errors.length > 0) {
				throw new ApiError(
					`API Errors: ${errResp.errors.map(e => e.message).join(', ')}`,
					{
						response: errResp,
						axiosError: axiosErr
					}
				);
			}
		}

		throw err;
	}

	/**
	 * Ping-pong endpoint for testing the connectivity with API Server
	 *
	 * @returns Ping-pong response
	 */
	public ping(): Promise<ApiResponse<ApiPingResponse>> {
		return this.httpRequest({
			url: '/api/ping'
		});
	}

	/**
	 * Create order
	 *
	 * @param params Create order params
	 * @returns Successful message
	 */
	public createOrder(params: ApiCreateOrderQuery): Promise<ApiResponse<string>> {
		return this.httpRequest({
			url: '/api/futures/orders',
			method: 'post',
			data: params
		});
	}

	/**
	 * Cancel order
	 *
	 * @param params Cancel order params
	 * @returns Successful message
	 */
	public cancelOrder(params: ApiCancelOrderQuery): Promise<ApiResponse<string>> {
		return this.httpRequest({
			url: '/api/futures/orders',
			method: 'delete',
			data: params
		});
	}

	/**
	 * Create order and futures contract simultaneously
	 *
	 * @param params Order and contract params
	 * @returns Successful message
	 */
	public createOrderWithModelContract(params: ApiCreateOrderWithContractQuery): Promise<ApiResponse<string>> {
		return this.httpRequest({
			url: '/api/futures/orders/create-with-contract',
			method: 'post',
			data: params
		});
	}

	/**
	 * Get order minimum order parameters
	 *
	 * @param params Query parameters
	 * @returns Minimum order response
	 */
	public getMinOrderAmount(params: ApiMinOrderAmountQuery): Promise<ApiResponse<ApiMinOrderAmountUserResponse>>;
	public getMinOrderAmount(): Promise<ApiResponse<ApiMinOrderAmountGuestResponse>>;
	public getMinOrderAmount(params?: ApiMinOrderAmountQuery): Promise<ApiResponse<ApiMinOrderAmountGuestResponse> | ApiResponse<ApiMinOrderAmountUserResponse>> {
		return this.httpRequest({
			url: '/api/futures/orders/min-order-amount',
			method: 'get',
			params
		});
	}

	/**
	 * Get futures contracts
	 *
	 * @param params Futures contract filters
	 * @returns Filtered futures contracts
	 */
	public getContracts(params?: ApiContractFiltersQuery): Promise<ApiResponse<ApiContractResponse[]>> {
		return this.httpRequest({
			url: '/api/futures/contracts',
			method: 'get',
			params
		});
	}

	/**
	 * Get one futures contract
	 *
	 * @param contractHash Futures contract hash
	 * @returns Futures contract details
	 */
	public getContract(contractHash: string): Promise<ApiResponse<ApiContractResponse>> {
		return this.httpRequest({
			url: `/api/futures/contracts/${contractHash}`,
			method: 'get'
		});
	}

	/**
	 * Get current multiplier
	 *
	 * @param params Query params
	 * @returns Multiplier response
	 */
	public getMultiplier(params: ApiContractMultiplierQuery): Promise<ApiResponse<ApiContractMultiplierResponse>> {
		return this.httpRequest({
			url: '/api/futures/contracts/multiplier',
			method: 'get',
			params
		});
	}

	/**
	 * Get base token by symbol
	 *
	 * @param symbol The symbol (ETH)
	 * @returns Object response
	 */
	public getBaseTokenBySymbol(symbol: string): Promise<ApiResponse<ApiBaseTokenResponse>> {
		return this.httpRequest({
			url: `/api/futures/base-tokens/symbol/${symbol}`,
			method: 'get'
		});
	}

	/**
	 * Get default base token
	 *
	 * @returns Object response
	 */
	public getDefaultBaseToken(): Promise<ApiResponse<ApiBaseTokenResponse>> {
		return this.httpRequest({
			url: '/api/futures/base-tokens/default',
			method: 'get'
		});
	}

	/**
	 * Get futures assets
	 *
	 * @param params Filter parameters
	 * @returns Filtered assets
	 */
	public getAssets(params?: ApiAssetQuery): Promise<ApiResponse<ApiAssetResponse[]>> {
		return this.httpRequest({
			url: '/api/futures/assets',
			method: 'get',
			params
		});
	}

	/**
	 * Get open positions
	 *
	 * @param params Query parameters
	 * @returns Open positions
	 */
	public getOpenPositions(params: ApiOpenPositionQuery): Promise<ApiResponse<ApiPositionResponse[]>> {
		return this.httpRequest({
			url: '/api/futures/positions-v2/open',
			method: 'get',
			params
		});
	}
}
