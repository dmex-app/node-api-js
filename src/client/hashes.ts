import {keccak256} from '@ethersproject/solidity';

export interface CreateOrderHashParams {
	contract_address: string;
	futures_contract_hash: string;
	user_address: string;
	amount: string;
	price: string;
	side: boolean;
	nonce: number;
	leverage: string;
}

/**
 * Creates the order hash.
 *
 * @param params The order hash parameters.
 * @returns The order hash.
 */
export function createOrderHash(params: CreateOrderHashParams): string {
	return keccak256([
		'address',
		'bytes32',
		'address',
		'uint256',
		'uint256',
		'bool',
		'uint256',
		'uint256'
	], [
		params.contract_address,
		params.futures_contract_hash,
		params.user_address,
		params.amount,
		params.price,
		params.side,
		params.nonce,
		params.leverage
	]);
}

export interface CancelOrderHashParams {
	contract_address: string;
	order_hash: string;
	user_address: string;
	nonce: number;
}

/**
 * Creates the cancel order hash.
 *
 * @param params The cancel order hash parameters.
 * @returns The cancel order hash.
 */
export function createCancelOrderHash(params: CancelOrderHashParams): string {
	return keccak256([
		'address',
		'bytes32',
		'address',
		'uint256'
	], [
		params.contract_address,
		params.order_hash,
		params.user_address,
		params.nonce
	]);
}

export interface CreateContractHashParams {
	contract_address: string;
	asset_hash: string;
	expiration_block: number;
	multiplier: string;
	funding_rate: string;
	perpetual: boolean;
	maintenance_margin: string;
}

/**
 * Creates the futures contract hash.
 *
 * @param params The contract hash parameters.
 * @returns The contract hash.
 */
export function createContractHash(params: CreateContractHashParams): string {
	return keccak256([
		'address',
		'bytes32',
		'uint256',
		'uint256',
		'uint256',
		'bool',
		'uint256'
	], [
		params.contract_address,
		params.asset_hash,
		params.expiration_block,
		params.multiplier,
		params.funding_rate,
		params.perpetual,
		params.maintenance_margin
	]);
}
