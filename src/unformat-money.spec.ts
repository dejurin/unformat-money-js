import test from 'tape';
import { UnFormatMoney } from './unformat-money'; // adjust the path as needed

// Test: Numeric input returns unchanged
test('Should return the same number if input is a number', (t) => {
  const um = new UnFormatMoney();
  const result = um.un(1234.56, { decimalPoint: '.' });
  t.equal(result, 1234.56, 'Numeric input returns itself');
  t.end();
});

// Test: Unformat string with comma as thousand separator
test('Should unformat string with comma as thousand separator', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('1,234.56', { decimalPoint: '.' });
  t.equal(result, 1234.56, 'Should correctly remove commas');
  t.end();
});

// Test: Handle negative numbers represented with parentheses
test('Should handle negative numbers represented with parentheses', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('(1234.56)', { decimalPoint: '.', accounting: true });
  t.equal(result, -1234.56, 'Parentheses indicate negative value');
  t.end();
});

// Test: Handle explicit negative sign in string
test('Should correctly parse string with explicit negative sign', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('-1,234.56', { decimalPoint: '.', accounting: true });
  t.equal(result, -1234.56, 'Should correctly parse negative sign');
  t.end();
});

// Test: Handle custom decimal separator (comma)
test('Should handle custom decimal separator (comma)', (t) => {
  // Instance with default option set to comma as decimal separator
  const um = new UnFormatMoney({ decimalPoint: ',' });
  const result = um.un('1.234,56', { decimalPoint: ',' });
  t.equal(
    result,
    1234.56,
    'Should convert string with comma as decimal separator',
  );
  t.end();
});

// Test: Return 0 for invalid number string
test('Should return 0 for invalid number string', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('abc', { decimalPoint: '.' });
  t.equal(result, 0, 'Invalid number string returns 0');
  t.end();
});

// Test: Parse string with multiple thousand separators
test('Should correctly parse number with multiple thousand separators', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('1,234,567.89', { decimalPoint: '.' });
  t.equal(result, 1234567.89, 'Should correctly remove multiple commas');
  t.end();
});

// Test: Parse string with currency symbols and extra spaces
test('Should correctly parse string with currency symbols and whitespace', (t) => {
  const um = new UnFormatMoney();
  const result = um.un(' $ 1,234.56 ', { decimalPoint: '.' });
  t.equal(result, 1234.56, 'Should remove currency symbols and whitespace');
  t.end();
});

// Test: Parse integer string
test('Should parse integer string correctly', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('1234', { decimalPoint: '.' });
  t.equal(result, 1234, 'Integer string parsed correctly');
  t.end();
});

// Test: Parse zero value
test('Should correctly parse zero', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('0', { decimalPoint: '.' });
  t.equal(result, 0, 'Zero is parsed correctly');
  t.end();
});

// Test: Return 0 for empty string
test('Should return 0 for empty string', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('', { decimalPoint: '.' });
  t.equal(result, 0, 'Empty string returns 0');
  t.end();
});

// Test: Handle string with multiple decimal points (parsing stops at first valid one)
test('Should handle string with multiple decimal points', (t) => {
  const um = new UnFormatMoney();
  const result = um.un('1,234.56.78', { decimalPoint: '.' });
  t.equal(
    result,
    1234.56,
    'Should parse until the first valid decimal separator',
  );
  t.end();
});

// Test: Work with default options when no options are provided in method call
test('Should work with default options when none are provided', (t) => {
  const um = new UnFormatMoney({ decimalPoint: '.' });
  const result = um.un('1,234.56');
  t.equal(result, 1234.56, 'Should use default options when none are provided');
  t.end();
});

// Test: Handle null and undefined inputs gracefully
test('Should return 0 for null or undefined input', (t) => {
  const um = new UnFormatMoney();
  const resultNull = um.un(null as any, { decimalPoint: '.' });
  const resultUndefined = um.un(undefined as any, { decimalPoint: '.' });
  t.equal(resultNull, 0, 'Null input returns 0');
  t.equal(resultUndefined, 0, 'Undefined input returns 0');
  t.end();
});

// Test: Handle negative number with spaces and parentheses
test('Should handle negative number with spaces and parentheses', (t) => {
  const um = new UnFormatMoney();
  const result = um.un(' ( 1,234.56 ) ', {
    decimalPoint: '.',
    accounting: true,
  });
  t.equal(result, -1234.56, 'Should handle negative number with spaces');
  t.end();
});
