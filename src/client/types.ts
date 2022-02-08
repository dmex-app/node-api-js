import type {
	ApiParams
} from '../api';

export interface ClientParams {
	apiParams?: ApiParams,
	walletPrivateKey: string,
	contractAddress: string
}

export interface CreateOrderWithContractHashParams {
	futures_contract_hash: string;
	amount: string;
	leverage: number;
	price: string;
	side: boolean;
	stop_price?: string;
}

export interface CreateOrderParams {
	asset_symbol: string;
	margin_currency?: string;
	expires_seconds?: number;
	leverage: number;
	amount: string;
	price: string;
	side: boolean;
	stop_price?: string;
}
