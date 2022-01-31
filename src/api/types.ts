import type {ExpandedSignature} from '../types';

export type ApiParams = {
	baseURL?: string,
	timeout?: number
};

export type ApiResponse<D = unknown> = {
	data: D
};

export type ApiErrorResponse = {
	errors: [{
		message: string,
		source?: string
	}]
};

export type ApiPingResponse = {
	message: string,
	ip: string
};

export type ApiCreateOrderQuery = {
	contract_address: string;
	futures_contract_hash: string;
	user_address: string;
	amount: string;
	price: string;
	side: boolean;
	nonce: number;
	leverage: string;
	order_hash: string;
	stop_price?: string;
} & ExpandedSignature;

export type ApiCancelOrderQuery = {
	contract_address: string;
	order_hash: string;
	user_address: string;
	nonce: number;
	cancel_hash: string;
} & ExpandedSignature;

export type ApiCreateContractQuery = {
	contract_model_hash: string,
	expiration_block: number,
	multiplier: string,
	funding_rate: string,
	perpetual: boolean,
	maintenance_margin: string,
	contract_hash: string
}

export type ApiCreateOrderWithContractQuery = {
	order: ApiCreateOrderQuery,
	contract: ApiCreateContractQuery
};

export type ApiMinOrderAmountQuery = {
	user_address: string
};

export type ApiMinOrderAmountGuestResponse = {
	min_order_amount_usd: string;
	gas_price_gwei: string;
	global_mm_multiplier: string;
	global_fr_multiplier: string;
	block_number: number;
	liquidation_funds: { [key: string]: string; };
	base_multipliers: { [key: string]: string; };
};

export type ApiMinOrderAmountUserResponse = ApiMinOrderAmountGuestResponse & {
	user_mm_multiplier: string;
	total_open_positions: string;
};

export type ApiAssetShortResponse = {
	name: string;
	label: string;
	symbol: string;
	chart_symbol: string;
	decimals: number;
	amount_dec: number;
	notional: string;
	maintenance_margin: string | null
};

export type ApiContractResponse = {
	id: number;
	contract_address: string;
	futures_contract_hash: string;
	futures_asset_hash: string;
	asset: string;
	expiration_block: number;
	margin: number;
	opposite_margin: number | null;
	maintenance_margin: string | null;
	expires_in_seconds: number;
	side: boolean | null;
	base_token: string;
	multiplier: string;
	contract_state: number;
	tx_create_block_number: number | null;
	tx_create_hash: string | null;
	tx_close_block_number: number | null;
	tx_close_hash: string | null;
	closing_price: string | null;
	closing_reason: number | null;
	closed_at: string | null;
	expires_approx_at: string;
	is_hidden: boolean;
	hidden_at: string | null;
	funding_rate: string | null;
	perpetual: boolean | null;
	is_model: boolean;
	created_at: string;
	mark_price: string;
	futures_asset: ApiAssetShortResponse;
};

export type ApiContractMultiplierQuery = {
	base_token: string;
}

export type ApiContractMultiplierResponse = {
	multiplier: string;
	base_token: string;
}
