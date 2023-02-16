[dmex-api-js](../README.md) / ApiTradeResponse

# Interface: ApiTradeResponse

## Table of contents

### Properties

- [amount\_filled](ApiTradeResponse.md#amount_filled)
- [closing\_trade](ApiTradeResponse.md#closing_trade)
- [contract\_address](ApiTradeResponse.md#contract_address)
- [created\_at](ApiTradeResponse.md#created_at)
- [exchange](ApiTradeResponse.md#exchange)
- [futures\_asset](ApiTradeResponse.md#futures_asset)
- [futures\_asset\_hash](ApiTradeResponse.md#futures_asset_hash)
- [futures\_asset\_name](ApiTradeResponse.md#futures_asset_name)
- [futures\_contract\_hash](ApiTradeResponse.md#futures_contract_hash)
- [id](ApiTradeResponse.md#id)
- [is\_confirmed](ApiTradeResponse.md#is_confirmed)
- [maker\_address](ApiTradeResponse.md#maker_address)
- [maker\_amount\_fee](ApiTradeResponse.md#maker_amount_fee)
- [maker\_order\_hash](ApiTradeResponse.md#maker_order_hash)
- [maker\_pct\_fee](ApiTradeResponse.md#maker_pct_fee)
- [price](ApiTradeResponse.md#price)
- [side](ApiTradeResponse.md#side)
- [taker\_address](ApiTradeResponse.md#taker_address)
- [taker\_amount\_fee](ApiTradeResponse.md#taker_amount_fee)
- [taker\_gas\_fee](ApiTradeResponse.md#taker_gas_fee)
- [taker\_gas\_limit\_fee](ApiTradeResponse.md#taker_gas_limit_fee)
- [taker\_order\_hash](ApiTradeResponse.md#taker_order_hash)
- [taker\_pct\_fee](ApiTradeResponse.md#taker_pct_fee)
- [tx\_block\_number](ApiTradeResponse.md#tx_block_number)
- [tx\_gas\_price](ApiTradeResponse.md#tx_gas_price)
- [tx\_hash](ApiTradeResponse.md#tx_hash)

## Properties

### amount\_filled

• **amount\_filled**: `string`

#### Defined in

[api/types.ts:273](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L273)

___

### closing\_trade

• **closing\_trade**: `boolean`

#### Defined in

[api/types.ts:284](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L284)

___

### contract\_address

• **contract\_address**: `string`

#### Defined in

[api/types.ts:265](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L265)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[api/types.ts:288](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L288)

___

### exchange

• **exchange**: `string`

#### Defined in

[api/types.ts:287](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L287)

___

### futures\_asset

• **futures\_asset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount_dec` | `number` |
| `chart_symbol` | `string` |
| `decimals` | `number` |
| `label` | `string` |
| `name` | `string` |
| `notional` | `string` |
| `symbol` | `string` |

#### Defined in

[api/types.ts:289](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L289)

___

### futures\_asset\_hash

• **futures\_asset\_hash**: `string`

#### Defined in

[api/types.ts:267](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L267)

___

### futures\_asset\_name

• **futures\_asset\_name**: `string`

#### Defined in

[api/types.ts:268](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L268)

___

### futures\_contract\_hash

• **futures\_contract\_hash**: `string`

#### Defined in

[api/types.ts:266](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L266)

___

### id

• **id**: `number`

#### Defined in

[api/types.ts:264](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L264)

___

### is\_confirmed

• **is\_confirmed**: ``null`` \| `boolean`

#### Defined in

[api/types.ts:283](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L283)

___

### maker\_address

• **maker\_address**: ``null`` \| `string`

#### Defined in

[api/types.ts:271](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L271)

___

### maker\_amount\_fee

• **maker\_amount\_fee**: `string`

#### Defined in

[api/types.ts:276](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L276)

___

### maker\_order\_hash

• **maker\_order\_hash**: ``null`` \| `string`

#### Defined in

[api/types.ts:285](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L285)

___

### maker\_pct\_fee

• **maker\_pct\_fee**: `string`

#### Defined in

[api/types.ts:274](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L274)

___

### price

• **price**: `string`

#### Defined in

[api/types.ts:270](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L270)

___

### side

• **side**: `boolean`

#### Defined in

[api/types.ts:269](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L269)

___

### taker\_address

• **taker\_address**: ``null`` \| `string`

#### Defined in

[api/types.ts:272](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L272)

___

### taker\_amount\_fee

• **taker\_amount\_fee**: `string`

#### Defined in

[api/types.ts:277](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L277)

___

### taker\_gas\_fee

• **taker\_gas\_fee**: `string`

#### Defined in

[api/types.ts:279](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L279)

___

### taker\_gas\_limit\_fee

• **taker\_gas\_limit\_fee**: `string`

#### Defined in

[api/types.ts:278](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L278)

___

### taker\_order\_hash

• **taker\_order\_hash**: ``null`` \| `string`

#### Defined in

[api/types.ts:286](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L286)

___

### taker\_pct\_fee

• **taker\_pct\_fee**: `string`

#### Defined in

[api/types.ts:275](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L275)

___

### tx\_block\_number

• **tx\_block\_number**: ``null`` \| `number`

#### Defined in

[api/types.ts:281](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L281)

___

### tx\_gas\_price

• **tx\_gas\_price**: ``null`` \| `string`

#### Defined in

[api/types.ts:280](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L280)

___

### tx\_hash

• **tx\_hash**: ``null`` \| `string`

#### Defined in

[api/types.ts:282](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/types.ts#L282)
