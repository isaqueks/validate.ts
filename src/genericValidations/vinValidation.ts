import RegexValidation from "../regexValidation";

export default class VinValidation extends RegexValidation {

    constructor() {
        super(/^(?=.*\d|=.*[A-Z])(?=.*[A-z])[A-z0-9]{17}$/, '*** ****** ** ******');
    }

}