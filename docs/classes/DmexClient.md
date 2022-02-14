[dmex-api-js](../README.md) / DmexClient

# Class: DmexClient

DMEX API client.

## Table of contents

### Constructors

- [constructor](DmexClient.md#constructor)

### Properties

- [api](DmexClient.md#api)
- [contractAddress](DmexClient.md#contractaddress)
- [wallet](DmexClient.md#wallet)

### Methods

- [cancelOrder](DmexClient.md#cancelorder)
- [createOrder](DmexClient.md#createorder)
- [setContractAddress](DmexClient.md#setcontractaddress)
- [setWallet](DmexClient.md#setwallet)

## Constructors

### constructor

• **new DmexClient**(`clientParams`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientParams` | [`ClientParams`](../interfaces/ClientParams.md) | Client parameters. |

#### Defined in

[client/client.ts:32](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/client.ts#L32)

## Properties

### api

• `Readonly` **api**: [`DmexApi`](DmexApi.md)

#### Defined in

[client/client.ts:25](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/client.ts#L25)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[client/client.ts:26](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/client.ts#L26)

___

### wallet

• **wallet**: [`DmexWallet`](DmexWallet.md)

#### Defined in

[client/client.ts:27](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/client.ts#L27)

## Methods

### cancelOrder

▸ **cancelOrder**(`orderHash`): `Promise`<`void`\>

Cancels an active order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderHash` | `string` | Order hash. |

#### Returns

`Promise`<`void`\>

#### Defined in

[client/client.ts:115](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/client.ts#L115)

___

### createOrder

▸ **createOrder**(`params`): `Promise`<`string`\>

Creates a new order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateOrderParams`](../interfaces/CreateOrderParams.md) | Order parameters. |

#### Returns

`Promise`<`string`\>

Order hash.

#### Defined in

[client/client.ts:63](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/client.ts#L63)

___

### setContractAddress

▸ **setContractAddress**(`contractAddress`): `void`

Set active DMEX trading smart contract address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractAddress` | `string` | DMEX trading smart contract address. |

#### Returns

`void`

#### Defined in

[client/client.ts:53](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/client.ts#L53)

___

### setWallet

▸ **setWallet**(`privateKey`): `void`

Set active wallet.
The wallet is required for ETH signatures (for ex.: order creation) and user identification.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `privateKey` | `string` | Wallet private key. |

#### Returns

`void`

#### Defined in

[client/client.ts:44](https://github.com/dmex-app/node-api-js/blob/402fa0b/src/client/client.ts#L44)
