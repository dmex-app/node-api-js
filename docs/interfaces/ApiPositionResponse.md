[dmex-api-js](../README.md) / ApiPositionResponse

# Interface: ApiPositionResponse

## Table of contents

### Properties

- [closed\_at](ApiPositionResponse.md#closed_at)
- [collateral](ApiPositionResponse.md#collateral)
- [contract\_address](ApiPositionResponse.md#contract_address)
- [created\_at](ApiPositionResponse.md#created_at)
- [entry\_block](ApiPositionResponse.md#entry_block)
- [expires\_in\_seconds](ApiPositionResponse.md#expires_in_seconds)
- [fee](ApiPositionResponse.md#fee)
- [funding\_cost](ApiPositionResponse.md#funding_cost)
- [futures\_asset](ApiPositionResponse.md#futures_asset)
- [futures\_contract](ApiPositionResponse.md#futures_contract)
- [futures\_contract\_hash](ApiPositionResponse.md#futures_contract_hash)
- [id](ApiPositionResponse.md#id)
- [leverage](ApiPositionResponse.md#leverage)
- [liq\_price](ApiPositionResponse.md#liq_price)
- [mark\_price](ApiPositionResponse.md#mark_price)
- [max\_collateral](ApiPositionResponse.md#max_collateral)
- [pnl](ApiPositionResponse.md#pnl)
- [position\_hash](ApiPositionResponse.md#position_hash)
- [price](ApiPositionResponse.md#price)
- [realized\_pnl](ApiPositionResponse.md#realized_pnl)
- [side](ApiPositionResponse.md#side)
- [size](ApiPositionResponse.md#size)
- [user\_address](ApiPositionResponse.md#user_address)
- [value](ApiPositionResponse.md#value)

## Properties

### closed\_at

• **closed\_at**: ``null`` \| `string`

#### Defined in

[api/types.ts:199](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L199)

___

### collateral

• **collateral**: `string`

#### Defined in

[api/types.ts:195](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L195)

___

### contract\_address

• **contract\_address**: `string`

#### Defined in

[api/types.ts:192](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L192)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[api/types.ts:200](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L200)

___

### entry\_block

• **entry\_block**: `number`

#### Defined in

[api/types.ts:197](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L197)

___

### expires\_in\_seconds

• **expires\_in\_seconds**: `number`

#### Defined in

[api/types.ts:203](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L203)

___

### fee

• **fee**: `string`

#### Defined in

[api/types.ts:198](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L198)

___

### funding\_cost

• **funding\_cost**: `string`

#### Defined in

[api/types.ts:196](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L196)

___

### futures\_asset

• **futures\_asset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount_dec` | `number` |
| `base_token` | { `address`: `string` ; `name`: `string` ; `symbol`: `string`  } |
| `base_token.address` | `string` |
| `base_token.name` | `string` |
| `base_token.symbol` | `string` |
| `chart_symbol` | `string` |
| `decimals` | `number` |
| `label` | `string` |
| `name` | `string` |
| `notional` | `string` |
| `symbol` | `string` |

#### Defined in

[api/types.ts:213](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L213)

___

### futures\_contract

• **futures\_contract**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expires_in_seconds` | `number` |
| `multiplier` | `string` |

#### Defined in

[api/types.ts:209](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L209)

___

### futures\_contract\_hash

• **futures\_contract\_hash**: `string`

#### Defined in

[api/types.ts:193](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L193)

___

### id

• **id**: `number`

#### Defined in

[api/types.ts:187](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L187)

___

### leverage

• **leverage**: `number`

#### Defined in

[api/types.ts:207](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L207)

___

### liq\_price

• **liq\_price**: `string`

#### Defined in

[api/types.ts:206](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L206)

___

### mark\_price

• **mark\_price**: `string`

#### Defined in

[api/types.ts:202](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L202)

___

### max\_collateral

• **max\_collateral**: `string`

#### Defined in

[api/types.ts:201](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L201)

___

### pnl

• **pnl**: `string`

#### Defined in

[api/types.ts:204](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L204)

___

### position\_hash

• **position\_hash**: `string`

#### Defined in

[api/types.ts:188](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L188)

___

### price

• **price**: `string`

#### Defined in

[api/types.ts:191](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L191)

___

### realized\_pnl

• **realized\_pnl**: `string`

#### Defined in

[api/types.ts:205](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L205)

___

### side

• **side**: `boolean`

#### Defined in

[api/types.ts:189](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L189)

___

### size

• **size**: `string`

#### Defined in

[api/types.ts:190](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L190)

___

### user\_address

• **user\_address**: `string`

#### Defined in

[api/types.ts:194](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L194)

___

### value

• **value**: `string`

#### Defined in

[api/types.ts:208](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/api/types.ts#L208)
