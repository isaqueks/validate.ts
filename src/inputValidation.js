"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The base class for Validations
 */
class InputValidation {
    /**
     * Removed the mask from an input. If the input isn't valid,
     * an error will be thrown
     * @param input The input string to clean
     * @returns The cleaned input
     */
    cleanMaskAndValidate(input) {
        const clean = this.cleanMaskUnsafe(input);
        if (!this.validateUnmasked(clean)) {
            throw new Error(`Tried to remove mask from invalid input ("${input}").`);
        }
        return clean;
    }
    /**
     * Adds the mask to an input string. If the input isn't valid,
     * an error will be thrown
     * @param input The input string to mask
     * @returns The masked input
     */
    insertMaskAndValidate(input) {
        const masked = this.insertMaskUnsafe(input);
        if (!this.validateMasked(masked)) {
            throw new Error(`Tried mask an invalid input ("${input}").`);
        }
        return masked;
    }
    /**
     * Validates the input string, masked or unmasked.
     * @param input The input to validate
     * @returns True or false if the input is valid or not. Being masked/unmasked makes no difference.
     */
    validate(input) {
        return this.isMasked(input) ? this.validateMasked(input) : this.validateUnmasked(input);
    }
}
exports.default = InputValidation;
