"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputValidation_1 = __importDefault(require("./inputValidation"));
class MultipleValidation extends inputValidation_1.default {
    constructor(validations) {
        super();
        if (!Array.isArray(validations) || validations.length == 0) {
            throw new Error('At least one validation expected!');
        }
        this.validations = validations;
    }
    isMasked(input) {
        for (const validation of this.validations) {
            if (validation.isMasked(input)) {
                return true;
            }
        }
        return false;
    }
    cleanMaskUnsafe(input) {
        let valueToReturn = input;
        for (const validation of this.validations) {
            if (validation.isMasked(input)) {
                const clean = validation.cleanMaskUnsafe(input);
                // As the mask is being REMOVED, we expect
                // that the string will get smaller
                if (clean.length < valueToReturn.length && validation.validateUnmasked(clean)) {
                    valueToReturn = clean;
                }
            }
        }
        return valueToReturn;
    }
    insertMaskUnsafe(input) {
        let valueToReturn = input;
        for (const validation of this.validations) {
            if (!validation.isMasked(input)) {
                const masked = validation.insertMaskUnsafe(input);
                // We can expected that, as long as the mask is being applied,
                // it will get bigger
                if ((masked.length > valueToReturn.length) && validation.validateMasked(masked)) {
                    valueToReturn = masked;
                }
            }
        }
        return valueToReturn;
    }
    validateMasked(input) {
        for (const validation of this.validations) {
            if (validation.validateMasked(input)) {
                return true;
            }
        }
        return false;
    }
    validateUnmasked(input) {
        for (const validation of this.validations) {
            if (validation.validateUnmasked(input)) {
                return true;
            }
        }
        return false;
    }
    validate(input) {
        return this.getWhichValidates(input) != null;
    }
    getWhichValidates(input) {
        for (const validation of this.validations) {
            if (validation.validate(input)) {
                return validation;
            }
        }
        return null;
    }
}
exports.default = MultipleValidation;
