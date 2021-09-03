import InputValidation from "./inputValidation";
export default class MultipleValidation extends InputValidation {
    protected validations: Array<InputValidation>;
    constructor(validations: Array<InputValidation>);
    isMasked(input: string): boolean;
    cleanMaskUnsafe(input: string): string;
    insertMaskUnsafe(input: string): string;
    validateMasked(input: string): boolean;
    validateUnmasked(input: string): boolean;
    validate(input: string): boolean;
    getWhichValidates(input: string): InputValidation;
}
