import MultipleValidation from "../multipleValidation";
import CnpjValidation from "./cnpjValidation";
import CpfValidation from "./cpfValidation";


export default class DocumentValidation extends MultipleValidation {

    private static CPF_VALIDATION = new CpfValidation();
    private static CNPJ_VALIDATION = new CnpjValidation();

    constructor() {
        super([
            DocumentValidation.CPF_VALIDATION,
            DocumentValidation.CNPJ_VALIDATION
        ]);
    }
}