/*!
 * unformat-money-js v1.0.0
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */

export interface UnFormatMoneyOptions {
  decimalPoint: string;
}

export class UnFormatMoney {

  version = '1.0.0';
  private defaults: UnFormatMoneyOptions = {
    decimalPoint: '.', // default
  };

  constructor(
    private options?: UnFormatMoneyOptions
  ) {
    this.options = {
      ...this.defaults,
      ...options
    };
  }

  from = (value: (string | number), options: UnFormatMoneyOptions): number => {
    options = {
      ...this.options,
      ...options
    };

    value = value || 0;

    if (typeof value === "number") return value;

    // Build regex to strip out everything except digits, decimal point and minus sign:
    const regex: RegExp = new RegExp("[^0-9-" + options.decimalPoint + "]", "g");
    const unformatted = parseFloat(
      ("" + value)
        .replace(/\((?=\d+)(.*)\)/, "-$1")    // replace bracketed values with negatives
        .replace(regex, '')                   // strip out any cruft
        .replace(options.decimalPoint, '.')   // make sure decimal point is standard
    );

    return !isNaN(unformatted) ? unformatted : 0;
  }

}