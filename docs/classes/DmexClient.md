[dmex-api-js](../README.md) / DmexClient

# Class: DmexClient

DMEX API client

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
| `clientParams` | [`ClientParams`](../interfaces/ClientParams.md) | Client parameters |

#### Defined in

[client/client.ts:31](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/client.ts#L31)

## Properties

### api

• `Readonly` **api**: [`DmexApi`](DmexApi.md)

#### Defined in

[client/client.ts:24](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/client.ts#L24)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[client/client.ts:25](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/client.ts#L25)

___

### wallet

• **wallet**: [`DmexWallet`](DmexWallet.md)

#### Defined in

[client/client.ts:26](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/client.ts#L26)

## Methods

### cancelOrder

▸ **cancelOrder**(`orderHash`): `Promise`<`void`\>

Cancel order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderHash` | `string` | Order hash |

#### Returns

`Promise`<`void`\>

#### Defined in

[client/client.ts:113](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/client.ts#L113)

___

### createOrder

▸ **createOrder**(`params`): `Promise`<`string`\>

Create order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateOrderParams`](../interfaces/CreateOrderParams.md) | Order parameters |

#### Returns

`Promise`<`string`\>

Order hash

#### Defined in

[client/client.ts:61](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/client.ts#L61)

___

### setContractAddress

▸ **setContractAddress**(`contractAddress`): `void`

Set active smart contract address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractAddress` | `string` | Futures smart contract address |

#### Returns

`void`

#### Defined in

[client/client.ts:51](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/client.ts#L51)

___

### setWallet

▸ **setWallet**(`privateKey`): `void`

Set active wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `privateKey` | `string` | Wallet private key |

#### Returns

`void`

#### Defined in

[client/client.ts:42](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/client/client.ts#L42)
