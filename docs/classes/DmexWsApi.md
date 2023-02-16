[dmex-api-js](../README.md) / DmexWsApi

# Class: DmexWsApi

DMEX Websocket API wrapper.

## Table of contents

### Constructors

- [constructor](DmexWsApi.md#constructor)

### Methods

- [disconnect](DmexWsApi.md#disconnect)
- [isConnected](DmexWsApi.md#isconnected)
- [onOrderbookUpdate](DmexWsApi.md#onorderbookupdate)
- [onTrade](DmexWsApi.md#ontrade)
- [subscribeToAccount](DmexWsApi.md#subscribetoaccount)
- [subscribeToAsset](DmexWsApi.md#subscribetoasset)
- [wsRequest](DmexWsApi.md#wsrequest)

## Constructors

### constructor

• **new DmexWsApi**(`__namedParameters?`)

Constructor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`WsParams`](../interfaces/WsParams.md) |

#### Defined in

[api/ws.ts:27](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/ws.ts#L27)

## Methods

### disconnect

▸ **disconnect**(): `void`

Disconnect websocket

#### Returns

`void`

#### Defined in

[api/ws.ts:128](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/ws.ts#L128)

___

### isConnected

▸ **isConnected**(): `boolean`

Check websocket status

#### Returns

`boolean`

Connection status.

#### Defined in

[api/ws.ts:117](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/ws.ts#L117)

___

### onOrderbookUpdate

▸ **onOrderbookUpdate**(`cbFn`): [`WsRemoveListener`](../README.md#wsremovelistener)

Listen for order book update events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cbFn` | [`WsEventCallback`](../README.md#wseventcallback)<[`WsEventOrderbookUpdate`](../interfaces/WsEventOrderbookUpdate.md)\> | Callback function. |

#### Returns

[`WsRemoveListener`](../README.md#wsremovelistener)

Function you can call to remove the listener.

#### Defined in

[api/ws.ts:98](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/ws.ts#L98)

___

### onTrade

▸ **onTrade**(`cbFn`): [`WsRemoveListener`](../README.md#wsremovelistener)

Listen for trade events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cbFn` | [`WsEventCallback`](../README.md#wseventcallback)<[`WsEventTrade`](../interfaces/WsEventTrade.md)\> | Callback function. |

#### Returns

[`WsRemoveListener`](../README.md#wsremovelistener)

Function you can call to remove the listener.

#### Defined in

[api/ws.ts:108](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/ws.ts#L108)

___

### subscribeToAccount

▸ **subscribeToAccount**(`userAddr`): `Promise`<`string`\>

Subscribe to specific account events.
Use "all" to subscribe to all events.
Use null to unsubscribe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddr` | ``null`` \| `string` | Account address. |

#### Returns

`Promise`<`string`\>

Successful message.

#### Defined in

[api/ws.ts:76](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/ws.ts#L76)

___

### subscribeToAsset

▸ **subscribeToAsset**(`assetHashOrSymbol`): `Promise`<`string`\>

Subscribe to specific asset events.
Use "all" to subscribe to all events.
Use null to unsubscribe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetHashOrSymbol` | ``null`` \| `string` | Asset hash or symbol. |

#### Returns

`Promise`<`string`\>

Successful message.

#### Defined in

[api/ws.ts:88](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/ws.ts#L88)

___

### wsRequest

▸ **wsRequest**<`TR`, `TD`\>(`method`, `data?`): `Promise`<`TR`\>

Perform a websocket request.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TR` | `unknown` |
| `TD` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `string` | Method name (URL) |
| `data?` | `TD` | The data. |

#### Returns

`Promise`<`TR`\>

The response.

#### Defined in

[api/ws.ts:63](https://github.com/dmex-app/node-api-js/blob/37c40d0/src/api/ws.ts#L63)
