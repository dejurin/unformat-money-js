"use strict";
/*!
 * unformat-money-js v1.0.4
 * (c) 2020 Yurii Derevych
 * Released under the BSD-2-Clause License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnFormatMoney = void 0;
class UnFormatMoney {
    constructor(options) {
        this.options = options;
        this.version = '1.0.4';
        this.defaults = {
            decimalPoint: '.',
        };
        this.un = (value, options) => {
            const opt = Object.assign(Object.assign({}, this.options), options);
            const val = value || 0;
            if (typeof val === 'number')
                return val;
            // Build regex to strip out everything except digits, decimal point and minus sign:
            const regex = new RegExp(`[^0-9-${opt.decimalPoint}]`, 'g');
            const unformatted = parseFloat((val)
                .replace(/\((?=\d+)(.*)\)/, '-$1') // replace bracketed values with negatives
                .replace(regex, '') // strip out any cruft
                .replace(opt.decimalPoint, '.'));
            return !isNaN(unformatted) ? unformatted : 0;
        };
        this.options = Object.assign(Object.assign({}, this.defaults), options);
    }
}
exports.UnFormatMoney = UnFormatMoney;
//# sourceMappingURL=unformat-money.js.map