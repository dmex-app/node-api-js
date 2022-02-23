import {DmexHttpApi} from './http';
import {DmexWsApi} from './ws';
import {API_BASE_URL, HTTP_TIMEOUT_MS} from '../configs';
import type {ApiParams} from './types';

export class DmexApi {
	public readonly http: DmexHttpApi;
	public readonly ws: DmexWsApi;

	/**
	 * Constructor.
	 *
	 * @param baseURL DMEX API base URL (by default production API is used).
	 * @param timeout HTTP request timeout.
	 */
	constructor({baseURL = API_BASE_URL, timeout = HTTP_TIMEOUT_MS}: ApiParams = {}) {
		this.http = new DmexHttpApi({baseURL, timeout});
		this.ws = new DmexWsApi({wsURL: baseURL, timeout});
	}
}
