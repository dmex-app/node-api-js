[dmex-api-js](../README.md) / DmexHttpApi

# Class: DmexHttpApi

DMEX HTTP API wrapper.

## Table of contents

### Constructors

- [constructor](DmexHttpApi.md#constructor)

### Methods

- [cancelOrder](DmexHttpApi.md#cancelorder)
- [createOrder](DmexHttpApi.md#createorder)
- [createOrderWithModelContract](DmexHttpApi.md#createorderwithmodelcontract)
- [getAssets](DmexHttpApi.md#getassets)
- [getBaseTokenBySymbol](DmexHttpApi.md#getbasetokenbysymbol)
- [getContract](DmexHttpApi.md#getcontract)
- [getContracts](DmexHttpApi.md#getcontracts)
- [getDefaultBaseToken](DmexHttpApi.md#getdefaultbasetoken)
- [getMinOrderAmount](DmexHttpApi.md#getminorderamount)
- [getMultiplier](DmexHttpApi.md#getmultiplier)
- [getOpenPositions](DmexHttpApi.md#getopenpositions)
- [getOrderbook](DmexHttpApi.md#getorderbook)
- [getTicker](DmexHttpApi.md#getticker)
- [httpRequest](DmexHttpApi.md#httprequest)
- [ping](DmexHttpApi.md#ping)

## Constructors

### constructor

• **new DmexHttpApi**(`__namedParameters?`)

Constructor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ApiParams`](../interfaces/ApiParams.md) |

#### Defined in

[api/http.ts:43](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L43)

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

[api/http.ts:120](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L120)

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

[api/http.ts:106](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L106)

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

[api/http.ts:134](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L134)

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

[api/http.ts:231](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L231)

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

[api/http.ts:206](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L206)

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

[api/http.ts:179](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L179)

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

[api/http.ts:165](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L165)

___

### getDefaultBaseToken

▸ **getDefaultBaseToken**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Get default base token.

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Object response.

#### Defined in

[api/http.ts:218](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L218)

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

[api/http.ts:149](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L149)

▸ **getMinOrderAmount**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountGuestResponse`](../interfaces/ApiMinOrderAmountGuestResponse.md)\>\>

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountGuestResponse`](../interfaces/ApiMinOrderAmountGuestResponse.md)\>\>

#### Defined in

[api/http.ts:150](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L150)

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

[api/http.ts:192](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L192)

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

[api/http.ts:245](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L245)

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

[api/http.ts:259](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L259)

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

[api/http.ts:273](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L273)

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

[api/http.ts:59](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L59)

___

### ping

▸ **ping**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPingResponse`](../interfaces/ApiPingResponse.md)\>\>

Test connectivity to the API.

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPingResponse`](../interfaces/ApiPingResponse.md)\>\>

Ping-pong response.

#### Defined in

[api/http.ts:94](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/http.ts#L94)
