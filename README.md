# format-money-js
[![Build Status](https://travis-ci.org/dejurin/unformat-money-js.svg?branch=master)](https://travis-ci.org/dejurin/unformat-money-js)
[![version](https://img.shields.io/npm/v/unformat-money-js)](https://www.npmjs.com/package/unformat-money-js)
![download per month](https://img.shields.io/npm/dm/unformat-money-js)


Tiny JavaScript library (576 bytes) by CurrencyRate.today, providing simple way removes all formatting/cruft and returns the raw float value.


## Require

```
const { FormatMoney } = require('unformat-money-js');
```

## Example

```
const un = new UnFormatMoney();

console.log(un.from('$12,345.67')); // 12345.67
```

## Options

You can added options in construct of class and in method. But method will be primary.
### Example: 
```
const un = new UnFormatMoney({ decimalPoint: ',' });

console.log(un.from('€12.345,67', { decimalPoint: ',' })); // 12345.67
```

| Name          | Default  | Type    |
|---------------|----------|---------|
| decimalPoint  | .        | String  |

## Source

https://currencyrate.today/

https://fx-w.io/