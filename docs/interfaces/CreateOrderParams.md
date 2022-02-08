[dmex-api-js](../README.md) / CreateOrderParams

# Interface: CreateOrderParams

Create order parameters

## Table of contents

### Properties

- [amount](CreateOrderParams.md#amount)
- [asset\_symbol](CreateOrderParams.md#asset_symbol)
- [expires\_seconds](CreateOrderParams.md#expires_seconds)
- [leverage](CreateOrderParams.md#leverage)
- [margin\_currency](CreateOrderParams.md#margin_currency)
- [price](CreateOrderParams.md#price)
- [side](CreateOrderParams.md#side)
- [stop\_price](CreateOrderParams.md#stop_price)

## Properties

### amount

• **amount**: `string`

#### Defined in

[client/types.ts:26](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/client/types.ts#L26)

___

### asset\_symbol

• **asset\_symbol**: `string`

#### Defined in

[client/types.ts:21](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/client/types.ts#L21)

___

### expires\_seconds

• `Optional` **expires\_seconds**: `number`

Contract expiration in seconds. Set -1 for perpetual.

#### Defined in

[client/types.ts:24](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/client/types.ts#L24)

___

### leverage

• **leverage**: `number`

#### Defined in

[client/types.ts:25](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/client/types.ts#L25)

___

### margin\_currency

• `Optional` **margin\_currency**: `string`

#### Defined in

[client/types.ts:22](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/client/types.ts#L22)

___

### price

• **price**: `string`

#### Defined in

[client/types.ts:27](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/client/types.ts#L27)

___

### side

• **side**: `boolean`

Long is true, short is false.

#### Defined in

[client/types.ts:29](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/client/types.ts#L29)

___

### stop\_price

• `Optional` **stop\_price**: `string`

#### Defined in

[client/types.ts:30](https://github.com/dmex-app/node-api-js/blob/f3f4876/src/client/types.ts#L30)
