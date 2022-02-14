/**
 * The error thrown by API Client.
 */
export class ClientError extends Error {
	constructor(message: string) {
		super(message);

		this.name = 'ClientError';
	}
}
