import {nextNonce} from './utils';

test('compare next nonce with previous nonce only once.', () => {
	const prev = nextNonce(),
		next = nextNonce();

	expect(next).toBeGreaterThan(prev);
});

test('compare next nonce with previous nonce 10 times in a row.', () => {
	let prev = nextNonce();

	for (let i = 0; i < 10; i++) {
		const next = nextNonce();

		expect(next).toBeGreaterThan(prev);

		prev = next;
	}
});
