/*!
 * unformat-money-js v1.0.0
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
export interface UnFormatMoneyOptions {
    decimalPoint: string;
}
export declare class UnFormatMoney {
    private options?;
    version: string;
    private defaults;
    constructor(options?: UnFormatMoneyOptions);
    un: (value: (string | number), options: UnFormatMoneyOptions) => number;
}
