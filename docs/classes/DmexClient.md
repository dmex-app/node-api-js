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
- [getOpenPositions](DmexClient.md#getopenpositions)
- [getOrderbook](DmexClient.md#getorderbook)
- [getTicker](DmexClient.md#getticker)
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

[client/client.ts:36](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L36)

## Properties

### api

• `Readonly` **api**: [`DmexApi`](DmexApi.md)

#### Defined in

[client/client.ts:29](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L29)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[client/client.ts:30](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L30)

___

### wallet

• **wallet**: [`DmexWallet`](DmexWallet.md)

#### Defined in

[client/client.ts:31](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L31)

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

[client/client.ts:118](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L118)

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

[client/client.ts:67](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L67)

___

### getOpenPositions

▸ **getOpenPositions**(`filters?`): `Promise`<[`ApiPositionResponse`](../interfaces/ApiPositionResponse.md)[]\>

Get user open positions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters?` | `Omit`<[`ApiOpenPositionQuery`](../interfaces/ApiOpenPositionQuery.md), ``"user_address"``\> | Optional filters. |

#### Returns

`Promise`<[`ApiPositionResponse`](../interfaces/ApiPositionResponse.md)[]\>

Open positions.

#### Defined in

[client/client.ts:159](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L159)

___

### getOrderbook

▸ **getOrderbook**(`symbol`): `Promise`<[`ApiOrderbookResponse`](../interfaces/ApiOrderbookResponse.md)\>

Get order book.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbol` | `string` | Asset symbol (ex.: ETH). |

#### Returns

`Promise`<[`ApiOrderbookResponse`](../interfaces/ApiOrderbookResponse.md)\>

The orderbook.

#### Defined in

[client/client.ts:146](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L146)

___

### getTicker

▸ **getTicker**(`symbol`): `Promise`<[`ApiTickerResponse`](../interfaces/ApiTickerResponse.md)\>

Get one ticker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbol` | `string` | Asset symbol. (ex.: BTC). |

#### Returns

`Promise`<[`ApiTickerResponse`](../interfaces/ApiTickerResponse.md)\>

Ticker object.

#### Defined in

[client/client.ts:172](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L172)

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

[client/client.ts:57](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L57)

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

[client/client.ts:48](https://github.com/dmex-app/node-api-js/blob/2403db6/src/client/client.ts#L48)
