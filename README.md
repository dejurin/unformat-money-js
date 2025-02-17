# unformat-money-js

[![Build Status](https://travis-ci.org/dejurin/unformat-money-js.svg?branch=master)](https://travis-ci.org/dejurin/unformat-money-js)
[![version](https://img.shields.io/npm/v/unformat-money-js)](https://www.npmjs.com/package/unformat-money-js)
![download per month](https://img.shields.io/npm/dm/unformat-money-js)

**Zero dependency** tiny JavaScript library (532 bytes) by CurrencyRate.today, providing simple way removes all formatting/cruft and returns the raw float value.

## Install

```bash
npm install unformat-money-js
```

## Usage

```typescript
import { UnFormatMoney } from 'unformat-money-js';

const unformat = new UnFormatMoney({ decimalPoint: '.' });
console.log(unformat.un('$12,345.67')); // 12345.67
```

## Options

You can added options in construct of class and in method. But method will be primary.

### Example:

```sh
const unformat = new UnFormatMoney({ decimalPoint: ',' });

console.log(unformat.un('€12.345,67', { decimalPoint: ',' })); // 12345.67
console.log(unformat.un('(12,345.67)', { decimalPoint: '.', accounting: true })); // -12345.67
```

| Name          | Default  | Type    | Description |
|---------------|----------|---------|-------------|
| decimalPoint  | .        | String  | Decimal point. |
| accounting    | false    | Boolean | If true, the parentheses are removed and a negative sign is added. |

## Source

https://currencyrate.today/

https://fx-w.io/