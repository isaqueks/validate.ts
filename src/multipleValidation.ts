import InputValidation from "./inputValidation";

export default class MultipleValidation extends InputValidation {

    protected validations: Array<InputValidation>;

    constructor(validations: Array<InputValidation>) {
        super();
        if (!Array.isArray(validations) || validations.length == 0) {
            throw new Error('At least one validation expected!');
        }
        this.validations = validations;
    }

    public isMasked(input: string): boolean {
        for (const validation of this.validations) {
            if (validation.isMasked(input)) {
                return true;
            }
        }
        return false;
    }

    public cleanMaskUnsafe(input: string): string {
        for (const validation of this.validations) {
            if (validation.isMasked(input)) {
                const clean = validation.cleanMaskUnsafe(input);
                if (validation.validateUnmasked(clean)) {
                    return clean;
                }
            }
        }
        return input;
    }

    public insertMaskUnsafe(input: string): string {
        for (const validation of this.validations) {
            if (!validation.isMasked(input)) {
                const masked = validation.insertMaskUnsafe(input);
                if (masked.length >= input.length && validation.validateMasked(masked)) {
                    return masked;
                }
            }
        }
        return input;
    }

    public validateMasked(input: string): boolean {
        for (const validation of this.validations) {
            if (validation.validateMasked(input)) {
                return true;
            }
        }
        return false;
    }


    public validateUnmasked(input: string): boolean {
        for (const validation of this.validations) {
            if (validation.validateUnmasked(input)) {
                return true;
            }
        }
        return false;
    }

    public getWhichValidates(input: string): InputValidation {
        for (const validation of this.validations) {
            if (validation.validate(input)) {
                return validation;
            }
        }
        return null;
    }

}