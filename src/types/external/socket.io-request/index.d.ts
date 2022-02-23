declare module 'socket.io-request' {
	export interface Options {
		event?: string,
		timeout?: number
	}

	export class SocketIORequest {
		request<RT = unknown, DT = unknown>(method: string, data?: DT): Promise<RT>;
	}

	export default function (io: SocketIOClient.Socket, options?: Options): SocketIORequest;
}
