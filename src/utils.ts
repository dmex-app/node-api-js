let noncePrevTime = 0;

export function nextNonce(): number {
	const now = Date.now();

	if (now <= noncePrevTime) {
		return ++noncePrevTime;
	}

	noncePrevTime = now;

	return now;
}
