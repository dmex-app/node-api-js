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
	ApiContractResponse,
	ApiContractMultiplierQuery,
	ApiContractMultiplierResponse
} from './types';
import {ApiError} from '../errors';

/**
 * DMEX API wrapper
 */
export class DmexApi {
	public readonly baseURL: string;
	public readonly timeout: number;
	public readonly axios: AxiosInstance;

	/**
	 * Constructor
	 *
	 * @param baseURL DMEX API base URL (by default production API is used)
	 * @param timeout HTTP request timeout
	 */
	constructor({baseURL = API_BASE_URL, timeout = HTTP_TIMEOUT_MS}: ApiParams = {}) {
		this.baseURL = baseURL;
		this.timeout = timeout;

		this.axios = axios.create({
			baseURL: this.baseURL,
			timeout: this.timeout,
			headers: {
				'X-Dmex-Api-Lib-Version': packageVersion
			}
		});
	}

	/**
	 * Perform http request to API base URL
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
	 * Get futures contract details
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
			params: {
				base_token: params.base_token
			}
		});
	}
}
