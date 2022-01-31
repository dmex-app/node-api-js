import type {AxiosError} from 'axios';

import type {ApiErrorResponse} from '../api';

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
