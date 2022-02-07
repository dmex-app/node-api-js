import type {ExpandedSignature} from '../types';
import type {
	ApiParams,
	ApiCreateOrderQuery
} from '../api';

export type ClientParams = {
	apiParams?: ApiParams,
	walletPrivateKey: string,
	contractAddress: string,
	avgBlockTime?: number
};

export type CreateOrderWithContractHashParams = Omit<ApiCreateOrderQuery,
	'user_address' | 'contract_address' | 'nonce' | 'order_hash' | 'leverage' | keyof ExpandedSignature
	> & {
	leverage: number;
};

export type CreateOrderParams = {
	asset_symbol: string;
	margin_currency?: string;
	expires_seconds?: number;
	leverage: number;
	amount: string;
	price: string;
	side: boolean;
	stop_price?: string;
};
