import type {
	ApiParams
} from '../api';

/**
 * Dmex Client constructor parameters
 */
export interface ClientParams {
	/** API parameters (Base URL, timeout) */
	apiParams?: ApiParams,
	/** Used for signatures */
	walletPrivateKey: string,
	/** DMEX Trading smart contract address */
	contractAddress: string
}

/**
 * Create order parameters
 */
export interface CreateOrderParams {
	asset_symbol: string;
	margin_currency?: string;
	/** Contract expiration in seconds. Set -1 for perpetual. */
	expires_seconds?: number;
	leverage: number;
	amount: string;
	price: string;
	/** Long is true, short is false. */
	side: boolean;
	stop_price?: string;
}

export interface CreateOrderWithContractHashParams {
	futures_contract_hash: string;
	amount: string;
	leverage: number;
	price: string;
	side: boolean;
	stop_price?: string;
}
