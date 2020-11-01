const { UnFormatMoney } = require('./dist/unformat-money.js');

const un1 = new UnFormatMoney();
const un2 = new UnFormatMoney({'decimalPoint': ','});

const array1 = [
  '$12,345.67',
  '12,345.67',
  '$12 345.67',
  '12 345.67',
  '$12,345.67 USD',
  '12,345.67 USD',
  '$12 345.67 USD',
  '12 345.67 USD',
  'text',
];

const array2 = [
  '$12.345,67',
  '12.345,67',
  '$12 345,67',
  '12 345,67',
  '$12.345,67 USD',
  '12.345,67 USD',
  '$12 345,67 USD',
  '12 345,67 USD',
  'text',
];

array1.forEach(element => {
  console.log(un1.from(element));
});

array2.forEach(element => {
  console.log(un2.from(element));
});