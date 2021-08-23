import RegexValidation from "../regexValidation";

export default class RenavamValidation extends RegexValidation {

    constructor() {
        super(/\b[0-9]{11}\b/, '***********');
    }

}