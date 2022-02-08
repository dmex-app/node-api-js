# node-api-js (alpha version)

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/dmex-api-js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/dmex-app/node-api-js/blob/main/LICENSE)

Node JS wrapper for DMEX API

## Installing
```
yarn add dmex-api-js
```

## Documentation
- [Code documentation](docs/README.md)

## Basic example
```javascript
const {DmexClient} = require('dmex-api-js');

const dmexClient = new DmexClient({
	walletPrivateKey: 'YOUR_PRIVATE_KEY',
	contractAddress: 'DMEX_TRADING_SMART_CONTARCT_ADDRESS'
});

dmexClient.createOrder({
	asset_symbol: 'ETH',
	leverage: 3,
	amount: '100000000',
	price: '300000000000',
	side: true
}).then(orderHash => {
	console.info('order hash:', orderHash);
});

dmexClient.cancelOrder('0x1cf490b0af8810bd0f377a4b47f050816213b3058eb500e232f7b7fa2cc61c81')
	.then(() => console.info('order canceled'));
```
