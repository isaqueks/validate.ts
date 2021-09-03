/**
 * The base class for Validations
 */
export default abstract class InputValidation {
    /**
     * Determines if an input string is masked or not
     * @param input The input string to analyze
     * @returns true or false depending if the input is masked.
     */
    abstract isMasked(input: string): boolean;
    /**
     * Removes the mask from an input. It will not do any validation,
     * so for avoiding bugs, use cleanMaskAndValidate instead or only use
     * this method if you are sure the input is valid
     * @param input The input string to clean the mask
     * @returns The cleaned input
     */
    abstract cleanMaskUnsafe(input: string): string;
    /**
     * Adds the mask to an input. It will not do any validation,
     * so for avoiding bugs, use insertMaskAndValidate instead or only use
     * this method if you are sure the input is valid
     * @param input The input string to clean the mask
     * @returns The cleaned input
     */
    abstract insertMaskUnsafe(input: string): string;
    /**
     * Removed the mask from an input. If the input isn't valid,
     * an error will be thrown
     * @param input The input string to clean
     * @returns The cleaned input
     */
    cleanMaskAndValidate(input: string): string;
    /**
     * Adds the mask to an input string. If the input isn't valid,
     * an error will be thrown
     * @param input The input string to mask
     * @returns The masked input
     */
    insertMaskAndValidate(input: string): string;
    /**
     * Validates an unmasked input. If it is valid but masked, false will be returned
     * @param input The input string to validate
     */
    abstract validateUnmasked(input: string): boolean;
    /**
     * Validates an masked input. If it is valid but unmasked, false will be returned
     * @param input The input string to validate
     */
    abstract validateMasked(input: string): boolean;
    /**
     * Validates the input string, masked or unmasked.
     * @param input The input to validate
     * @returns True or false if the input is valid or not. Being masked/unmasked makes no difference.
     */
    validate(input: string): boolean;
}
