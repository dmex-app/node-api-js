[dmex-api-js](../README.md) / DmexWallet

# Class: DmexWallet

DMEX Wallet.

## Table of contents

### Constructors

- [constructor](DmexWallet.md#constructor)

### Methods

- [getAddress](DmexWallet.md#getaddress)
- [signHash](DmexWallet.md#signhash)

## Constructors

### constructor

• **new DmexWallet**(`privateKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Defined in

[client/wallet.ts:12](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/wallet.ts#L12)

## Methods

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

The wallet address.

#### Defined in

[client/wallet.ts:19](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/wallet.ts#L19)

___

### signHash

▸ **signHash**(`hash`): `Promise`<[`ExpandedSignature`](../interfaces/ExpandedSignature.md)\>

Signs a hash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash to sign. |

#### Returns

`Promise`<[`ExpandedSignature`](../interfaces/ExpandedSignature.md)\>

The signature parameters (v, r, s).

#### Defined in

[client/wallet.ts:29](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/wallet.ts#L29)
