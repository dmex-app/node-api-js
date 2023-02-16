[dmex-api-js](../README.md) / WsEventTrade

# Interface: WsEventTrade

## Table of contents

### Properties

- [data](WsEventTrade.md#data)
- [event](WsEventTrade.md#event)

## Properties

### data

• **data**: [`ApiTradeResponse`](ApiTradeResponse.md)

#### Defined in

[api/types.ts:321](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L321)

___

### event

• **event**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"order_match"`` \| ``"trade_confirmation"`` \| ``"internal_trade"`` |
| `name` | `string` |

#### Defined in

[api/types.ts:317](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L317)
