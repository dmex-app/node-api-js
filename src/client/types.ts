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

export type CreateOrderParams = Omit<ApiCreateOrderQuery,
	'user_address' | 'contract_address' | 'nonce' | 'order_hash' | 'leverage' | keyof ExpandedSignature
> & {
	leverage: number;
};
