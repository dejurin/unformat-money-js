/*!
 * unformat-money-js v1.0.7
 * (c) 2025 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */

export interface UnFormatMoneyOptions {
  decimalPoint?: string;
  accounting?: boolean;
}

export class UnFormatMoney {
  version = '1.0.7'; // Updated version to match header
  private defaults: UnFormatMoneyOptions = {
    decimalPoint: '.', // default
    accounting: false, // normal mode by default
  };

  constructor(private options?: UnFormatMoneyOptions) {
    this.options = {
      ...this.defaults,
      ...options,
    };
  }

  // Escapes a string to be used in a RegExp (helper function)
  private escapeRegExp = (str: string): string =>
    str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // English comment: Escape special regex characters

  un = (value: string | number, options?: UnFormatMoneyOptions): number => {
    const opt = {
      ...this.options,
      ...options,
    };

    const val: string | number = value || 0;

    if (typeof val === 'number') return val;

    let strVal = val as string;

    if (opt.accounting) {
      // Replace pattern: remove spaces inside parentheses and prepend minus sign
      strVal = strVal.replace(/\(\s*([\d,\.]+)\s*\)/, '-$1');
    } else {
      // Normal mode: remove all parentheses
      strVal = strVal.replace(/[()]/g, '');
    }

    // Escape the decimal point to ensure safe usage in RegExp
    const escapedDecimal = this.escapeRegExp(opt.decimalPoint);
    // Build regex: keep digits, minus sign and the specified decimal separator
    const regex: RegExp = new RegExp(`[^0-9\\-${escapedDecimal}]`, 'g');

    const unformatted = parseFloat(
      strVal
        .replace(/\((?=\d+)(.*)\)/, '-$1') // replace bracketed values with negatives
        .replace(regex, '') // strip out any cruft
        .replace(new RegExp(escapedDecimal, 'g'), '.'),
    ); // replace all decimal separators with standard dot;

    return !isNaN(unformatted) ? unformatted : 0;
  };
}
