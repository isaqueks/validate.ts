"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputValidation_1 = __importDefault(require("./inputValidation"));
const MASK_ANY_CHAR = '*';
class RegexValidation extends inputValidation_1.default {
    constructor(unmaskedRule, mask) {
        super();
        this._validationRule = unmaskedRule;
        this._mask = mask;
        this._isMaskUseless = mask.replace(/\*/g, '') === '';
    }
    get mask() {
        return this._mask;
    }
    get validationRule() {
        return this._validationRule;
    }
    isMasked(input) {
        if (input.length != this.mask.length) {
            return false;
        }
        for (let i = 0; i < input.length; i++) {
            const maskCh = this.mask[i];
            const inputCh = input[i];
            if (maskCh === MASK_ANY_CHAR) {
                continue;
            }
            if (maskCh !== inputCh) {
                return false;
            }
        }
        return true;
    }
    cleanMaskUnsafe(input) {
        if (!this.isMasked(input)) {
            return input;
        }
        const output = [];
        let inputIndex = -1;
        for (let ch of this.mask) {
            inputIndex++;
            if (ch === MASK_ANY_CHAR) {
                const chToAdd = input[inputIndex];
                output.push(chToAdd);
            }
            else {
                continue;
            }
        }
        return output.join('');
    }
    insertMaskUnsafe(input) {
        if (this.isMasked(input)) {
            return input;
        }
        const output = [];
        let inputIndex = 0;
        for (let ch of this.mask) {
            if (ch === MASK_ANY_CHAR) {
                output.push(input[inputIndex++]);
            }
            else {
                output.push(ch);
            }
        }
        return output.join('');
    }
    /**
     * Validates an unmasked input. If it is valid but masked, false will be returned (except in a * only mask)
     * @param input The input string to validate
     */
    validateUnmasked(input) {
        if (!this._isMaskUseless && this.isMasked(input)) {
            return false;
        }
        return this.validationRule.test(input);
    }
    /**
     * Validates an masked input. If it is valid but unmasked, false will be returned (except in a * only mask)
     * @param input The input string to validate
     */
    validateMasked(input) {
        if (this._isMaskUseless) {
            return this.validationRule.test(input);
        }
        if (!this.isMasked(input)) {
            return false;
        }
        return this.validateUnmasked(this.cleanMaskUnsafe(input));
    }
}
exports.default = RegexValidation;
