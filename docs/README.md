dmex-api-js

# dmex-api-js

## Table of contents

### References

- [default](README.md#default)

### Classes

- [DmexApi](classes/DmexApi.md)
- [DmexClient](classes/DmexClient.md)
- [DmexHttpApi](classes/DmexHttpApi.md)
- [DmexWallet](classes/DmexWallet.md)
- [DmexWsApi](classes/DmexWsApi.md)

### Interfaces

- [ApiAssetQuery](interfaces/ApiAssetQuery.md)
- [ApiAssetResponse](interfaces/ApiAssetResponse.md)
- [ApiAssetShortResponse](interfaces/ApiAssetShortResponse.md)
- [ApiBaseTokenResponse](interfaces/ApiBaseTokenResponse.md)
- [ApiCancelOrderQuery](interfaces/ApiCancelOrderQuery.md)
- [ApiContractFiltersQuery](interfaces/ApiContractFiltersQuery.md)
- [ApiContractMultiplierQuery](interfaces/ApiContractMultiplierQuery.md)
- [ApiContractMultiplierResponse](interfaces/ApiContractMultiplierResponse.md)
- [ApiContractResponse](interfaces/ApiContractResponse.md)
- [ApiCreateContractQuery](interfaces/ApiCreateContractQuery.md)
- [ApiCreateOrderQuery](interfaces/ApiCreateOrderQuery.md)
- [ApiCreateOrderWithContractQuery](interfaces/ApiCreateOrderWithContractQuery.md)
- [ApiErrorResponse](interfaces/ApiErrorResponse.md)
- [ApiMinOrderAmountGuestResponse](interfaces/ApiMinOrderAmountGuestResponse.md)
- [ApiMinOrderAmountQuery](interfaces/ApiMinOrderAmountQuery.md)
- [ApiMinOrderAmountUserResponse](interfaces/ApiMinOrderAmountUserResponse.md)
- [ApiOpenPositionQuery](interfaces/ApiOpenPositionQuery.md)
- [ApiOrderbookQuery](interfaces/ApiOrderbookQuery.md)
- [ApiOrderbookResponse](interfaces/ApiOrderbookResponse.md)
- [ApiParams](interfaces/ApiParams.md)
- [ApiPingResponse](interfaces/ApiPingResponse.md)
- [ApiPositionResponse](interfaces/ApiPositionResponse.md)
- [ApiResponse](interfaces/ApiResponse.md)
- [ApiTickerResponse](interfaces/ApiTickerResponse.md)
- [ApiTradeResponse](interfaces/ApiTradeResponse.md)
- [ClientParams](interfaces/ClientParams.md)
- [CreateOrderParams](interfaces/CreateOrderParams.md)
- [CreateOrderWithContractHashParams](interfaces/CreateOrderWithContractHashParams.md)
- [ExpandedSignature](interfaces/ExpandedSignature.md)
- [WsEventOrderbookUpdate](interfaces/WsEventOrderbookUpdate.md)
- [WsEventTrade](interfaces/WsEventTrade.md)
- [WsParams](interfaces/WsParams.md)

### Type aliases

- [ApiOrderbookItem](README.md#apiorderbookitem)
- [WsEventCallback](README.md#wseventcallback)
- [WsRemoveListener](README.md#wsremovelistener)

## References

### default

Renames and re-exports [DmexClient](classes/DmexClient.md)

## Type aliases

### ApiOrderbookItem

Ƭ **ApiOrderbookItem**: [qty: string, price: string, is\_mine: boolean]

Orderbook Item

#### Defined in

[api/types.ts:239](https://github.com/dmex-app/node-api-js/blob/70d7108/src/api/types.ts#L239)

___

### WsEventCallback

Ƭ **WsEventCallback**<`D`\>: (`event`: `D`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `unknown` |

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `D` |

##### Returns

`void`

#### Defined in

[api/types.ts:305](https://github.com/dmex-app/node-api-js/blob/70d7108/src/api/types.ts#L305)

___

### WsRemoveListener

Ƭ **WsRemoveListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[api/types.ts:307](https://github.com/dmex-app/node-api-js/blob/70d7108/src/api/types.ts#L307)
