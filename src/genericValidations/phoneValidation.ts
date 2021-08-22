import InputValidation from "../inputValidation";
import MultipleValidation from "../multipleValidation";
import RegexValidation from "../regexValidation";

const phoneDddDdiExtraDigit = new RegexValidation(/^\d{13}$/, '+** (**) *****-****');
const phoneDddDdi = new RegexValidation(/^\d{12}$/, '+** (**) ****-****');

const phoneDddExtraDigit = new RegexValidation(/^\d{11}$/, '(**) *****-****');
const phoneDdd = new RegexValidation(/^\d{10}$/, '(**) ****-****');

const phoneExtraDigit = new RegexValidation(/^\d{9}$/, '*****-****');
const phone = new RegexValidation(/^\d{8}$/, '****-****');

export default class PhoneValidation extends MultipleValidation {

    constructor() {
        super([
            phoneDddDdiExtraDigit,
            phoneDddDdi,
            
            phoneDddExtraDigit,
            phoneDdd,

            phoneExtraDigit,
            phone
        ]);
    }
}