import {nextNonce} from './utils';

test('next nonce should be greater than previous nonce', () => {
	const prev = nextNonce(),
		next = nextNonce();

	expect(next).toBeGreaterThan(prev);
});
