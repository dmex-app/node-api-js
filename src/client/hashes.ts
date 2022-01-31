import {keccak256} from '@ethersproject/solidity';

export type CreateOrderHashParams = {
	contract_address: string;
	futures_contract_hash: string;
	user_address: string;
	amount: string;
	price: string;
	side: boolean;
	nonce: number;
	leverage: string;
};

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

export type CancelOrderHashParams = {
	contract_address: string;
	order_hash: string;
	user_address: string;
	nonce: number;
};

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

export type CreateContractHashParams = {
	contract_address: string;
	asset_hash: string;
	expiration_block: number;
	multiplier: string;
	funding_rate: string;
	perpetual: boolean;
	maintenance_margin: string;
};

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
