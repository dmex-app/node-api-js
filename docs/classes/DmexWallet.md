[dmex-api-js](../README.md) / DmexWallet

# Class: DmexWallet

DMEX Wallet

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

[client/wallet.ts:12](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/wallet.ts#L12)

## Methods

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Defined in

[client/wallet.ts:16](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/wallet.ts#L16)

___

### signHash

▸ **signHash**(`hash`): `Promise`<[`ExpandedSignature`](../interfaces/ExpandedSignature.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<[`ExpandedSignature`](../interfaces/ExpandedSignature.md)\>

#### Defined in

[client/wallet.ts:20](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/wallet.ts#L20)
