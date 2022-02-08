import type {ExpandedSignature} from '../types';

export interface ApiParams {
	baseURL?: string,
	timeout?: number
}

export interface ApiResponse<D = unknown> {
	data: D
}

export interface ApiErrorResponse {
	errors: [{
		message: string,
		source?: string
	}]
}

export interface ApiPingResponse {
	message: string,
	ip: string
}

export interface ApiCreateOrderQuery extends ExpandedSignature {
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
}

export interface ApiCancelOrderQuery extends ExpandedSignature {
	contract_address: string;
	order_hash: string;
	user_address: string;
	nonce: number;
	cancel_hash: string;
}

export interface ApiCreateContractQuery {
	contract_model_hash: string,
	expiration_block: number,
	multiplier: string,
	funding_rate: string,
	perpetual: boolean,
	maintenance_margin: string,
	contract_hash: string
}

export interface ApiCreateOrderWithContractQuery {
	order: ApiCreateOrderQuery,
	contract: ApiCreateContractQuery
}

export interface ApiMinOrderAmountQuery {
	user_address: string
}

export interface ApiMinOrderAmountGuestResponse {
	min_order_amount_usd: string;
	gas_price_gwei: string;
	global_mm_multiplier: string;
	global_fr_multiplier: string;
	block_number: number;
	avg_block_time: number;
	liquidation_funds: { [key: string]: string; };
	base_multipliers: { [key: string]: string; };
}

export interface ApiMinOrderAmountUserResponse extends ApiMinOrderAmountGuestResponse {
	user_mm_multiplier: string;
	total_open_positions: string;
}

export interface ApiAssetShortResponse {
	name: string;
	label: string;
	symbol: string;
	chart_symbol: string;
	decimals: number;
	amount_dec: number;
	notional: string;
	maintenance_margin: string | null
}

export interface ApiContractFiltersQuery {
	contract_address?: string;
	futures_asset_hash?: string;
	contract_state?: number;
	active?: boolean;
	margin?: number;
	expires_in_seconds?: number;
	is_model?: boolean;
	is_hidden?: boolean;
	limit?: number;
	offset?: number;
}

export interface ApiContractResponse {
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
}

export interface ApiContractMultiplierQuery {
	base_token: string;
}

export interface ApiContractMultiplierResponse {
	multiplier: string;
	base_token: string;
}

export interface ApiBaseTokenResponse {
	symbol: string;
	token_address: string;
}

export interface ApiAssetQuery {
	contract_address?: string;
	base_token?: string;
	name?: string;
	symbol?: string;
	type?: string;
	limit?: number;
	offset?: number;
}

export interface ApiAssetResponse {
	id: number;
	contract_address: string;
	futures_asset_hash: string;
	name: string;
	label: string;
	symbol: string;
	chart_symbol: string;
	base_token: string;
	max_margin: number;
	recommended_contract: {
		futures_contract_hash: string;
		id: number;
	}
}

export interface ApiOpenPositionQuery {
	user_address: string;
	contract_address?: string;
	futures_asset_hash?: string;
	side?: boolean;
	contract_expires_in_seconds?: number;
	contract_margin?: number
}

export interface ApiPositionResponse {
	id: number;
	position_hash: string;
	side: boolean;
	size: string;
	price: string;
	contract_address: string;
	futures_contract_hash: string;
	user_address: string;
	collateral: string;
	funding_cost: string;
	entry_block: number;
	fee: string;
	closed_at: string|null;
	created_at: string;
	max_collateral: string;
	mark_price: string;
	expires_in_seconds: number;
	pnl: string;
	realized_pnl: string;
	liq_price: string;
	leverage: number;
	value: string;
	futures_contract: {
		multiplier: string;
		expires_in_seconds: number;
	};
	futures_asset: {
		name: string;
		label: string;
		symbol: string;
		chart_symbol: string;
		decimals: number;
		amount_dec: number;
		notional: string;
		base_token: {
			address: string;
			symbol: string;
			name: string;
		};
	};
}
