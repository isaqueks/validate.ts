import RegexValidation from "../regexValidation";
export declare type DateFormat = 'MM/DD/YYYY' | 'DD/MM/YYYY';
export default class DateValidation extends RegexValidation {
    private _format;
    get format(): DateFormat;
    constructor(format: DateFormat);
    private validateParts;
    validateMasked(input: string): boolean;
    validateUnmasked(input: string): boolean;
}
