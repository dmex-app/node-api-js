[dmex-api-js](../README.md) / DmexApi

# Class: DmexApi

DMEX API wrapper.

## Table of contents

### Constructors

- [constructor](DmexApi.md#constructor)

### Methods

- [cancelOrder](DmexApi.md#cancelorder)
- [createOrder](DmexApi.md#createorder)
- [createOrderWithModelContract](DmexApi.md#createorderwithmodelcontract)
- [getAssets](DmexApi.md#getassets)
- [getBaseTokenBySymbol](DmexApi.md#getbasetokenbysymbol)
- [getContract](DmexApi.md#getcontract)
- [getContracts](DmexApi.md#getcontracts)
- [getDefaultBaseToken](DmexApi.md#getdefaultbasetoken)
- [getMinOrderAmount](DmexApi.md#getminorderamount)
- [getMultiplier](DmexApi.md#getmultiplier)
- [getOpenPositions](DmexApi.md#getopenpositions)
- [getOrderbook](DmexApi.md#getorderbook)
- [getTicker](DmexApi.md#getticker)
- [httpRequest](DmexApi.md#httprequest)
- [ping](DmexApi.md#ping)

## Constructors

### constructor

• **new DmexApi**(`__namedParameters?`)

Constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ApiParams`](../interfaces/ApiParams.md) |

#### Defined in

[api/api.ts:43](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L43)

## Methods

### cancelOrder

▸ **cancelOrder**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Cancels an active order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiCancelOrderQuery`](../interfaces/ApiCancelOrderQuery.md) | Cancel order parameters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Successful message.

#### Defined in

[api/api.ts:120](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L120)

___

### createOrder

▸ **createOrder**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Creates a new order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiCreateOrderQuery`](../interfaces/ApiCreateOrderQuery.md) | Order parameters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Successful message.

#### Defined in

[api/api.ts:106](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L106)

___

### createOrderWithModelContract

▸ **createOrderWithModelContract**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Creates a new futures contract and a new order on it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiCreateOrderWithContractQuery`](../interfaces/ApiCreateOrderWithContractQuery.md) | Order and contract parameters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Successful message.

#### Defined in

[api/api.ts:134](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L134)

___

### getAssets

▸ **getAssets**(`params?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiAssetResponse`](../interfaces/ApiAssetResponse.md)[]\>\>

Get futures assets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`ApiAssetQuery`](../interfaces/ApiAssetQuery.md) | Filter parameters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiAssetResponse`](../interfaces/ApiAssetResponse.md)[]\>\>

Filtered assets.

#### Defined in

[api/api.ts:231](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L231)

___

### getBaseTokenBySymbol

▸ **getBaseTokenBySymbol**(`symbol`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Get base token by symbol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbol` | `string` | The symbol (ex.: ETH). |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Object response.

#### Defined in

[api/api.ts:206](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L206)

___

### getContract

▸ **getContract**(`contractHash`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractResponse`](../interfaces/ApiContractResponse.md)\>\>

Get one futures contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractHash` | `string` | Futures contract hash. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractResponse`](../interfaces/ApiContractResponse.md)\>\>

Futures contract details.

#### Defined in

[api/api.ts:179](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L179)

___

### getContracts

▸ **getContracts**(`params?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractResponse`](../interfaces/ApiContractResponse.md)[]\>\>

Get futures contracts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`ApiContractFiltersQuery`](../interfaces/ApiContractFiltersQuery.md) | Query filters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractResponse`](../interfaces/ApiContractResponse.md)[]\>\>

Filtered futures contracts.

#### Defined in

[api/api.ts:165](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L165)

___

### getDefaultBaseToken

▸ **getDefaultBaseToken**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Get default base token.

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Object response.

#### Defined in

[api/api.ts:218](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L218)

___

### getMinOrderAmount

▸ **getMinOrderAmount**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountUserResponse`](../interfaces/ApiMinOrderAmountUserResponse.md)\>\>

Get minimum order parameters.
Useful properties for order creation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiMinOrderAmountQuery`](../interfaces/ApiMinOrderAmountQuery.md) | Optional query parameters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountUserResponse`](../interfaces/ApiMinOrderAmountUserResponse.md)\>\>

Minimum order response.

#### Defined in

[api/api.ts:149](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L149)

▸ **getMinOrderAmount**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountGuestResponse`](../interfaces/ApiMinOrderAmountGuestResponse.md)\>\>

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountGuestResponse`](../interfaces/ApiMinOrderAmountGuestResponse.md)\>\>

#### Defined in

[api/api.ts:150](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L150)

___

### getMultiplier

▸ **getMultiplier**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractMultiplierResponse`](../interfaces/ApiContractMultiplierResponse.md)\>\>

Get current multiplier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiContractMultiplierQuery`](../interfaces/ApiContractMultiplierQuery.md) | Query parameters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractMultiplierResponse`](../interfaces/ApiContractMultiplierResponse.md)\>\>

Multiplier response.

#### Defined in

[api/api.ts:192](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L192)

___

### getOpenPositions

▸ **getOpenPositions**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPositionResponse`](../interfaces/ApiPositionResponse.md)[]\>\>

Get open positions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiOpenPositionQuery`](../interfaces/ApiOpenPositionQuery.md) | Filter parameters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPositionResponse`](../interfaces/ApiPositionResponse.md)[]\>\>

Filtered open positions.

#### Defined in

[api/api.ts:245](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L245)

___

### getOrderbook

▸ **getOrderbook**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiOrderbookResponse`](../interfaces/ApiOrderbookResponse.md)\>\>

Get order book.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiOrderbookQuery`](../interfaces/ApiOrderbookQuery.md) | Query parameters. |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiOrderbookResponse`](../interfaces/ApiOrderbookResponse.md)\>\>

The orderbook.

#### Defined in

[api/api.ts:259](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L259)

___

### getTicker

▸ **getTicker**(`symbol`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiTickerResponse`](../interfaces/ApiTickerResponse.md)\>\>

Get one ticker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbol` | `string` | The symbol (ex.: ETH). |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiTickerResponse`](../interfaces/ApiTickerResponse.md)\>\>

Ticker object.

#### Defined in

[api/api.ts:273](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L273)

___

### httpRequest

▸ **httpRequest**<`TR`\>(`reqParams`): `Promise`<`TR`\>

Perform a http request to API base URL.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TR` | [`ApiResponse`](../interfaces/ApiResponse.md)<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reqParams` | `AxiosRequestConfig`<`any`\> | Request parameters. |

#### Returns

`Promise`<`TR`\>

API response.

#### Defined in

[api/api.ts:59](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L59)

___

### ping

▸ **ping**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPingResponse`](../interfaces/ApiPingResponse.md)\>\>

Test connectivity to the API.

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPingResponse`](../interfaces/ApiPingResponse.md)\>\>

Ping-pong response.

#### Defined in

[api/api.ts:94](https://github.com/dmex-app/node-api-js/blob/2403db6/src/api/api.ts#L94)
