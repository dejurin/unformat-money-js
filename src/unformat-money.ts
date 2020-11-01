/*!
 * unformat-money-js v1.0.0
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */

export interface UnFormatMoneyOptions {
  decimalPoint: string;
}

export class UnFormatMoney {

  version = '1.0.3';
  private defaults: UnFormatMoneyOptions = {
    decimalPoint: '.', // default
  };

  constructor(
    private options?: UnFormatMoneyOptions,
  ) {
    this.options = {
      ...this.defaults,
      ...options,
    };
  }

  un = (value: (string | number), options: UnFormatMoneyOptions): number => {
    const opt = {
      ...this.options,
      ...options,
    };

    const val: (string | number) = value || 0;

    if (typeof val === 'number') return val;

    // Build regex to strip out everything except digits, decimal point and minus sign:
    const regex: RegExp = new RegExp(`[^0-9-${opt.decimalPoint}]`, 'g');
    const unformatted = parseFloat(
      (val)
        .replace(/\((?=\d+)(.*)\)/, '-$1')    // replace bracketed values with negatives
        .replace(regex, '')                   // strip out any cruft
        .replace(opt.decimalPoint, '.'),      // make sure decimal point is standard
    );

    return !isNaN(unformatted) ? unformatted : 0;
  }

}
