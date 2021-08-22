import RegexValidation from "../regexValidation";

export default class CepValidation extends RegexValidation {

    constructor() {
        super(/^\d{8}$/, '*****-***');
    }

}