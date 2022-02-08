[dmex-api-js](../README.md) / DmexApi

# Class: DmexApi

DMEX API wrapper

## Table of contents

### Constructors

- [constructor](DmexApi.md#constructor)

### Properties

- [axios](DmexApi.md#axios)
- [baseURL](DmexApi.md#baseurl)
- [timeout](DmexApi.md#timeout)

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

[api/api.ts:42](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L42)

## Properties

### axios

• `Readonly` **axios**: `AxiosInstance`

#### Defined in

[api/api.ts:34](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L34)

___

### baseURL

• `Readonly` **baseURL**: `string`

#### Defined in

[api/api.ts:32](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L32)

___

### timeout

• `Readonly` **timeout**: `number`

#### Defined in

[api/api.ts:33](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L33)

## Methods

### cancelOrder

▸ **cancelOrder**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Cancel order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiCancelOrderQuery`](../interfaces/ApiCancelOrderQuery.md) | Cancel order params |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Successful message

#### Defined in

[api/api.ts:122](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L122)

___

### createOrder

▸ **createOrder**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Create order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiCreateOrderQuery`](../interfaces/ApiCreateOrderQuery.md) | Create order params |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Successful message

#### Defined in

[api/api.ts:108](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L108)

___

### createOrderWithModelContract

▸ **createOrderWithModelContract**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Create order and futures contract simultaneously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiCreateOrderWithContractQuery`](../interfaces/ApiCreateOrderWithContractQuery.md) | Order and contract params |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Successful message

#### Defined in

[api/api.ts:136](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L136)

___

### getAssets

▸ **getAssets**(`params?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiAssetResponse`](../interfaces/ApiAssetResponse.md)[]\>\>

Get futures assets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`ApiAssetQuery`](../interfaces/ApiAssetQuery.md) | Filter parameters |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiAssetResponse`](../interfaces/ApiAssetResponse.md)[]\>\>

Filtered assets

#### Defined in

[api/api.ts:232](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L232)

___

### getBaseTokenBySymbol

▸ **getBaseTokenBySymbol**(`symbol`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Get base token by symbol

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbol` | `string` | The symbol (ETH) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Object response

#### Defined in

[api/api.ts:207](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L207)

___

### getContract

▸ **getContract**(`contractHash`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractResponse`](../interfaces/ApiContractResponse.md)\>\>

Get one futures contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractHash` | `string` | Futures contract hash |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractResponse`](../interfaces/ApiContractResponse.md)\>\>

Futures contract details

#### Defined in

[api/api.ts:180](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L180)

___

### getContracts

▸ **getContracts**(`params?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractResponse`](../interfaces/ApiContractResponse.md)[]\>\>

Get futures contracts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`ApiContractFiltersQuery`](../interfaces/ApiContractFiltersQuery.md) | Futures contract filters |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractResponse`](../interfaces/ApiContractResponse.md)[]\>\>

Filtered futures contracts

#### Defined in

[api/api.ts:166](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L166)

___

### getDefaultBaseToken

▸ **getDefaultBaseToken**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Get default base token

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiBaseTokenResponse`](../interfaces/ApiBaseTokenResponse.md)\>\>

Object response

#### Defined in

[api/api.ts:219](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L219)

___

### getMinOrderAmount

▸ **getMinOrderAmount**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountUserResponse`](../interfaces/ApiMinOrderAmountUserResponse.md)\>\>

Get order minimum order parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiMinOrderAmountQuery`](../interfaces/ApiMinOrderAmountQuery.md) | Query parameters |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountUserResponse`](../interfaces/ApiMinOrderAmountUserResponse.md)\>\>

Minimum order response

#### Defined in

[api/api.ts:150](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L150)

▸ **getMinOrderAmount**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountGuestResponse`](../interfaces/ApiMinOrderAmountGuestResponse.md)\>\>

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiMinOrderAmountGuestResponse`](../interfaces/ApiMinOrderAmountGuestResponse.md)\>\>

#### Defined in

[api/api.ts:151](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L151)

___

### getMultiplier

▸ **getMultiplier**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractMultiplierResponse`](../interfaces/ApiContractMultiplierResponse.md)\>\>

Get current multiplier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiContractMultiplierQuery`](../interfaces/ApiContractMultiplierQuery.md) | Query params |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiContractMultiplierResponse`](../interfaces/ApiContractMultiplierResponse.md)\>\>

Multiplier response

#### Defined in

[api/api.ts:193](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L193)

___

### getOpenPositions

▸ **getOpenPositions**(`params`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPositionResponse`](../interfaces/ApiPositionResponse.md)[]\>\>

Get open positions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ApiOpenPositionQuery`](../interfaces/ApiOpenPositionQuery.md) | Query parameters |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPositionResponse`](../interfaces/ApiPositionResponse.md)[]\>\>

Open positions

#### Defined in

[api/api.ts:246](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L246)

___

### httpRequest

▸ **httpRequest**<`TR`\>(`reqParams`): `Promise`<`TR`\>

Perform a http request to API base URL

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TR` | [`ApiResponse`](../interfaces/ApiResponse.md)<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reqParams` | `AxiosRequestConfig`<`any`\> | Request params |

#### Returns

`Promise`<`TR`\>

API response

#### Defined in

[api/api.ts:61](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L61)

___

### ping

▸ **ping**(): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPingResponse`](../interfaces/ApiPingResponse.md)\>\>

Ping-pong endpoint for testing the connectivity with API Server

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ApiPingResponse`](../interfaces/ApiPingResponse.md)\>\>

Ping-pong response

#### Defined in

[api/api.ts:96](https://github.com/dmex-app/node-api-js/blob/0ea0202/src/api/api.ts#L96)
