"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multipleValidation_1 = __importDefault(require("../multipleValidation"));
const regexValidation_1 = __importDefault(require("../regexValidation"));
const phoneDddDdiExtraDigit = new regexValidation_1.default(/^\d{13}$/, '+** (**) *****-****');
const phoneDddDdi = new regexValidation_1.default(/^\d{12}$/, '+** (**) ****-****');
const phoneDddExtraDigit = new regexValidation_1.default(/^\d{11}$/, '(**) *****-****');
const phoneDdd = new regexValidation_1.default(/^\d{10}$/, '(**) ****-****');
const phoneExtraDigit = new regexValidation_1.default(/^\d{9}$/, '*****-****');
const phone = new regexValidation_1.default(/^\d{8}$/, '****-****');
class PhoneValidation extends multipleValidation_1.default {
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
exports.default = PhoneValidation;
