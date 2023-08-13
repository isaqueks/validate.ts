"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regexValidation_1 = __importDefault(require("../regexValidation"));
class DateValidation extends regexValidation_1.default {
    get format() {
        return this._format;
    }
    constructor(format) {
        super(/^\d{8}$/, '**/**/****');
        this._format = format;
    }
    validateParts(part1, part2) {
        if (this._format === 'DD/MM/YYYY') {
            return Number(part1) <= 31 && Number(part2) <= 12;
        }
        else {
            return Number(part2) <= 31 && Number(part1) <= 12;
        }
    }
    validateMasked(input) {
        if (!this.isMasked(input)) {
            return false;
        }
        const clean = this.cleanMaskUnsafe(input);
        return this.validateUnmasked(clean);
        // if (!this.validationRule.test(input)) {
        //     return false;
        // }
        // const [ part1, part2, yyyy ] = input.split('/');
        // return this.validateParts(part1, part2);
    }
    validateUnmasked(input) {
        if (this.isMasked(input)) {
            return false;
        }
        if (!this.validationRule.test(input)) {
            return false;
        }
        const part1 = input.substring(0, 2);
        const part2 = input.substring(2, 4);
        return this.validateParts(part1, part2);
    }
}
exports.default = DateValidation;
