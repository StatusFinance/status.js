# Status Finance SDK
Javascript SDK for https://status.finance

## Installation
```
npm install status.finance
```

## Example
```
const { getTransaction } = require('status.finance');
const tx = await getTransaction({ apiKey: 'myKey' }, { hash: '0x9ce76b451158efb18ef0a3565139b3ed1eb7f248365ad94ebaf21dcdd0e81de9', chain: 'ethereum' })
console.log(tx)
```