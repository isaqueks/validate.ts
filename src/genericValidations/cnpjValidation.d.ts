import RegexValidation from "../regexValidation";
export default class CnpjValidation extends RegexValidation {
    constructor();
    protected checkCnpjLogic(cnpj: any): boolean;
    validateUnmasked(input: string): boolean;
}
