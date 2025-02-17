"use strict";
/*!
 * unformat-money-js v1.0.7
 * (c) 2025 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnFormatMoney = void 0;
class UnFormatMoney {
    constructor(options) {
        this.options = options;
        this.version = '1.0.7'; // Updated version to match header
        this.defaults = {
            decimalPoint: '.', // default
            accounting: false, // normal mode by default
        };
        // Escapes a string to be used in a RegExp (helper function)
        this.escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // English comment: Escape special regex characters
        this.un = (value, options) => {
            const opt = Object.assign(Object.assign({}, this.options), options);
            const val = value || 0;
            if (typeof val === 'number')
                return val;
            let strVal = val;
            if (opt.accounting) {
                // Replace pattern: remove spaces inside parentheses and prepend minus sign
                strVal = strVal.replace(/\(\s*([\d,\.]+)\s*\)/, '-$1');
            }
            else {
                // Normal mode: remove all parentheses
                strVal = strVal.replace(/[()]/g, '');
            }
            // Escape the decimal point to ensure safe usage in RegExp
            const escapedDecimal = this.escapeRegExp(opt.decimalPoint);
            // Build regex: keep digits, minus sign and the specified decimal separator
            const regex = new RegExp(`[^0-9\\-${escapedDecimal}]`, 'g');
            const unformatted = parseFloat(strVal
                .replace(/\((?=\d+)(.*)\)/, '-$1') // replace bracketed values with negatives
                .replace(regex, '') // strip out any cruft
                .replace(new RegExp(escapedDecimal, 'g'), '.')); // replace all decimal separators with standard dot;
            return !isNaN(unformatted) ? unformatted : 0;
        };
        this.options = Object.assign(Object.assign({}, this.defaults), options);
    }
}
exports.UnFormatMoney = UnFormatMoney;
//# sourceMappingURL=unformat-money.js.map