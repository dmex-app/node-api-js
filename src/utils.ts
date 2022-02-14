let noncePrevTime = 0;

/**
 * Returns a unique nonce.
 *
 * @returns Next nonce.
 */
export function nextNonce(): number {
	const now = Date.now();

	if (now <= noncePrevTime) {
		return ++noncePrevTime;
	}

	noncePrevTime = now;

	return now;
}
