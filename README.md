# node-api-js

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/dmex-api-js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/dmex-app/node-api-js/blob/main/LICENSE)

Node JS wrapper for DMEX API

## Installing
```
yarn add dmex-api-js
```

## Documentation
- [DmexClient](docs/classes/DmexClient.md)
  - [Create order](docs/classes/DmexClient.md#createorder)
  - [Cancel order](docs/classes/DmexClient.md#cancelorder)
  - [Get ticker](docs/classes/DmexClient.md#getticker)
  - [Get orderbook](docs/classes/DmexClient.md#getorderbook)
  - [Get open positions](docs/classes/DmexClient.md#getopenpositions)

## Basic example
```javascript
const {DmexClient} = require('dmex-api-js');

const dmexClient = new DmexClient({
	apiParams: {
		// Demo API (by default prod. API is used)
		baseURL: 'https://api.demo.dmex.app'
	},
	walletPrivateKey: 'YOUR_PRIVATE_KEY',
	contractAddress: 'DMEX_TRADING_SMART_CONTARCT_ADDRESS'
});

// Create a new order
dmexClient.createOrder({
	asset_symbol: 'ETH',
	leverage: 3, // x3
	amount: '100000000', // 100000000 / 1e8 = 1
	price: '300000000000', // 300000000000 / 1e8 = 3000
	side: true // true = long, false = short
	// margin_currency: 'ETH', // optional, default ETH
	// expires_seconds: -1, // optional (-1 means perpetual)
}).then(orderHash => {
	console.info('created order hash:', orderHash);
});

// Cancel an active order
dmexClient.cancelOrder('0x1cf490b0af8810bd0f377a4b47f050816213b3058eb500e232f7b7fa2cc61c81')
	.then(() => console.info('order canceled'));
```
