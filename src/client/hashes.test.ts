import {
	createOrderHash,
	createCancelOrderHash,
	createContractHash
} from './hashes';

test('createOrderHash', () => {
	const orderHash = createOrderHash({
		contract_address: '0x3584F3257b143109fF11E52266094241Fdb7984c',
		futures_contract_hash: '0x16c0a9eeaddb4ad652478330bec7a2e699d9b7222c618e23d5955517c306ca62',
		user_address: '0x0A24BdE9D7618f9B745036FE0A7b57c7451ED724',
		amount: '177420000',
		price: '4180500000000',
		side: false,
		leverage: '5000000000',
		nonce: 1644076656026
	});

	expect(orderHash).toBe('0xaafd28560079b1a4d95ddad4c9758aad26ca210a2f2cc39920dba855b48ae53d');
});

test('createCancelOrderHash', () => {
	const cancelHash = createCancelOrderHash({
		contract_address: '0x3584F3257b143109fF11E52266094241Fdb7984c',
		nonce: 1644149722558,
		order_hash: '0xd0a1ae7817e0ab092dd7e9844742ec9ccb29226aa29d4d0825325dcb7e0c972e',
		user_address: '0x1dc01F50a82E5f91cE374109a16c2e9D770E41FC'
	});

	expect(cancelHash).toBe('0x31c1a77aba652e82826f6f7339fba1eb78fc548e172e710a62ae3a88ad885f2a');
});

test('createContractHash', () => {
	const contractHash = createContractHash({
		contract_address: '0x3584F3257b143109fF11E52266094241Fdb7984c',
		asset_hash: '0xc8c82b0e7e3b61dd644346182965d520dd314f284c14728f22e5c832709130c3',
		expiration_block: 12369479,
		funding_rate: '31508560146344',
		maintenance_margin: '10000000',
		multiplier: '32697',
		perpetual: false
	});

	expect(contractHash).toBe('0x16c0a9eeaddb4ad652478330bec7a2e699d9b7222c618e23d5955517c306ca62');
});
