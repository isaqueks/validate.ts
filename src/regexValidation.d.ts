import InputValidation from "./inputValidation";
export default class RegexValidation extends InputValidation {
    private _validationRule;
    private _mask;
    private _isMaskUseless;
    get mask(): string;
    get validationRule(): RegExp;
    constructor(unmaskedRule: RegExp, mask: string);
    isMasked(input: string): boolean;
    cleanMaskUnsafe(input: string): string;
    insertMaskUnsafe(input: string): string;
    /**
     * Validates an unmasked input. If it is valid but masked, false will be returned (except in a * only mask)
     * @param input The input string to validate
     */
    validateUnmasked(input: string): boolean;
    /**
     * Validates an masked input. If it is valid but unmasked, false will be returned (except in a * only mask)
     * @param input The input string to validate
     */
    validateMasked(input: string): boolean;
}
