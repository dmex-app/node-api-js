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
- [onOrderbookUpdate](DmexClient.md#onorderbookupdate)
- [onTrade](DmexClient.md#ontrade)
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

[client/client.ts:40](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L40)

## Properties

### api

• `Readonly` **api**: [`DmexApi`](DmexApi.md)

#### Defined in

[client/client.ts:33](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L33)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[client/client.ts:34](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L34)

___

### wallet

• **wallet**: [`DmexWallet`](DmexWallet.md)

#### Defined in

[client/client.ts:35](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L35)

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

[client/client.ts:122](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L122)

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

[client/client.ts:71](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L71)

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

[client/client.ts:163](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L163)

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

[client/client.ts:150](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L150)

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

[client/client.ts:176](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L176)

___

### onOrderbookUpdate

▸ **onOrderbookUpdate**(`symbol`, `cbFn`): `Promise`<[`WsRemoveListener`](../README.md#wsremovelistener)\>

Subscribe and listen for order book update events.
Warning: you can listen events for only one symbol at once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbol` | `string` | Asset symbol. |
| `cbFn` | [`WsEventCallback`](../README.md#wseventcallback)<[`WsEventOrderbookUpdate`](../interfaces/WsEventOrderbookUpdate.md)\> | Callback function. |

#### Returns

`Promise`<[`WsRemoveListener`](../README.md#wsremovelistener)\>

Function you can call to remove the listener.

#### Defined in

[client/client.ts:198](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L198)

___

### onTrade

▸ **onTrade**(`cbFn`): [`WsRemoveListener`](../README.md#wsremovelistener)

Listen for all trade events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cbFn` | [`WsEventCallback`](../README.md#wseventcallback)<[`WsEventTrade`](../interfaces/WsEventTrade.md)\> | Callback function. |

#### Returns

[`WsRemoveListener`](../README.md#wsremovelistener)

Function you can call to remove the listener.

#### Defined in

[client/client.ts:186](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L186)

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

[client/client.ts:61](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L61)

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

[client/client.ts:52](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/client/client.ts#L52)
