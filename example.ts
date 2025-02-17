import { UnFormatMoney } from './src/unformat-money';

const un1 = new UnFormatMoney({ accounting: true });
const un2 = new UnFormatMoney({ decimalPoint: ',' });

const array1: string[] = [
  '$12,345.67',
  '12,345.67',
  '$12 345.67',
  '12 345.67',
  '$12,345.67 USD',
  '12,345.67 USD',
  '$12 345.67 USD',
  '12 345.67 USD',
  '(12 345.67) USD',
  '(12,345.67)',
  'text',
];

const array2: string[] = [
  '$12.345,67',
  '12.345,67',
  '$12 345,67',
  '12 345,67',
  '$12.345,67 USD',
  '12.345,67 USD',
  '$12 345,67 USD',
  '12 345,67 USD',
  '(12 345,67) USD',
  '(12.345,67)',
  'text',
];

array1.forEach((element: string): void => {
  console.log(un1.un(element));
});

array2.forEach((element: string): void => {
  console.log(un2.un(element));
});


const unformat = new UnFormatMoney({ decimalPoint: ',' });

console.log(unformat.un('€12.345,67', { decimalPoint: ',' })); // 12345.67
console.log(unformat.un('(12,345.67)', { decimalPoint: '.', accounting: true })); // -12345.67