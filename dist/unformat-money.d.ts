/*!
 * unformat-money-js v1.0.6
 * (c) 2025 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
export interface UnFormatMoneyOptions {
    decimalPoint?: string;
    accounting?: boolean;
}
export declare class UnFormatMoney {
    private options?;
    version: string;
    private defaults;
    constructor(options?: UnFormatMoneyOptions);
    private escapeRegExp;
    un: (value: string | number, options?: UnFormatMoneyOptions) => number;
}
