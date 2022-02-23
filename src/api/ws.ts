import io from 'socket.io-client';
import ioReq from 'socket.io-request';
import type {SocketIORequest} from 'socket.io-request';
import {API_BASE_URL, HTTP_TIMEOUT_MS} from '../configs';
import type {
	WsParams,
	WsEventCallback,
	WsRemoveListener,
	WsEventOrderbookUpdate,
	WsEventTrade
} from './types';

/** DMEX Websocket API wrapper. */
export class DmexWsApi {
	private readonly url: string;
	private readonly timeout: number;

	private socketIo?: SocketIOClient.Socket;
	private socketReq?: SocketIORequest;

	/**
	 * Constructor.
	 *
	 * @param baseURL DMEX WS URL (by default production URL is used).
	 * @param timeout Socket IO timeout.
	 */
	constructor({wsURL = API_BASE_URL, timeout = HTTP_TIMEOUT_MS}: WsParams = {}) {
		this.url = wsURL;
		this.timeout = timeout;
	}

	private getSocketIo(): SocketIOClient.Socket {
		if (this.socketIo) {
			return this.socketIo;
		}

		return this.socketIo = io(this.url, {timeout: this.timeout});
	}

	private getSocketReq(): SocketIORequest {
		if (this.socketReq) {
			return this.socketReq;
		}

		return this.socketReq = ioReq(this.getSocketIo());
	}

	private createWsListener<D>(eventName: string, cbFn: WsEventCallback<D>): WsRemoveListener {
		this.getSocketIo().on(eventName, cbFn);

		return () => {
			this.getSocketIo().off(eventName, cbFn);
		};
	}

	/**
	 * Perform a websocket request.
	 *
	 * @param method Method name (URL)
	 * @param data The data.
	 * @returns The response.
	 */
	public wsRequest<TR = unknown, TD = unknown>(method: string, data?: TD): Promise<TR> {
		return this.getSocketReq()
			.request(method, data);
	}

	/**
	 * Subscribe to specific account events.
	 * Use "all" to subscribe to all events.
	 * Use null to unsubscribe.
	 *
	 * @param userAddr Account address.
	 * @returns Successful message.
	 */
	public subscribeToAccount(userAddr: string | null | 'all'): Promise<string> {
		return this.wsRequest('/accounts/subscribe', userAddr);
	}

	/**
	 * Subscribe to specific asset events.
	 * Use "all" to subscribe to all events.
	 * Use null to unsubscribe.
	 *
	 * @param assetHashOrSymbol Asset hash or symbol.
	 * @returns Successful message.
	 */
	public subscribeToAsset(assetHashOrSymbol: string | null | 'all'): Promise<string> {
		return this.wsRequest('/futures/subscribe/futures-asset', assetHashOrSymbol);
	}

	/**
	 * Listen for order book update events.
	 *
	 * @param cbFn Callback function.
	 * @returns Function you can call to remove the listener.
	 */
	public onOrderbookUpdate(cbFn: WsEventCallback<WsEventOrderbookUpdate>): WsRemoveListener {
		return this.createWsListener('futures_orderbook_update', cbFn);
	}

	/**
	 * Listen for trade events.
	 *
	 * @param cbFn Callback function.
	 * @returns Function you can call to remove the listener.
	 */
	public onTrade(cbFn: WsEventCallback<WsEventTrade>): WsRemoveListener {
		return this.createWsListener('futures_trades', cbFn);
	}

	/**
	 * Check websocket status
	 *
	 * @returns Connection status.
	 */
	public isConnected() {
		if (!this.socketIo) {
			return false;
		}

		return this.socketIo.connected;
	}

	/**
	 * Disconnect websocket
	 */
	public disconnect(): void {
		if (!this.socketIo) {
			return;
		}

		this.socketIo.disconnect();

		this.socketIo = undefined;
		this.socketReq = undefined;
	}
}
