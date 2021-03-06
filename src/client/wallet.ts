import {Wallet} from '@ethersproject/wallet';
import {splitSignature, arrayify} from '@ethersproject/bytes';

import type {ExpandedSignature} from '../types';

/**
 * DMEX Wallet.
 */
export class DmexWallet {
	private readonly ethersWallet: Wallet;

	constructor(privateKey: string) {
		this.ethersWallet = new Wallet(privateKey);
	}

	/**
	 * @returns The wallet address.
	 */
	public getAddress(): string {
		return this.ethersWallet.address;
	}

	/**
	 * Signs a hash.
	 *
	 * @param hash The hash to sign.
	 * @returns The signature parameters (v, r, s).
	 */
	public async signHash(hash: string): Promise<ExpandedSignature> {
		const hashSign = await this.ethersWallet.signMessage(arrayify(hash));
		const signValues = splitSignature(hashSign);

		return {
			v: signValues.v,
			r: signValues.r,
			s: signValues.s
		};
	}
}
