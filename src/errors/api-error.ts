import type {AxiosError} from 'axios';

import type {ApiErrorResponse} from '../api';

/**
 * The error thrown by API Wrapper.
 */
export class ApiError extends Error {
	public readonly response: ApiErrorResponse;
	public readonly axiosError: AxiosError;

	constructor(message: string, {response, axiosError}: {response: ApiErrorResponse, axiosError: AxiosError}) {
		super(message);

		this.name = 'ApiError';
		this.response = response;
		this.axiosError = axiosError;
	}
}
