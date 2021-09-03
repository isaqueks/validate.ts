"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regexValidation_1 = __importDefault(require("../regexValidation"));
class CpfValidation extends regexValidation_1.default {
    constructor() {
        super(/^\d{11}$/, '***.***.***-**');
    }
    // This is a refactored version from https://www.devmedia.com.br/validar-cpf-com-javascript/23916
    checkCpfLogic(input) {
        try {
            if (input.length != 11)
                return false;
            let Soma = 0;
            let Resto;
            // Elimina CPFs invalidos conhecidos
            if (input == "00000000000" ||
                input == "11111111111" ||
                input == "22222222222" ||
                input == "33333333333" ||
                input == "44444444444" ||
                input == "55555555555" ||
                input == "66666666666" ||
                input == "77777777777" ||
                input == "88888888888" ||
                input == "99999999999")
                return false;
            for (let i = 1; i <= 9; i++) {
                Soma = Soma + parseInt(input.substring(i - 1, i)) * (11 - i);
            }
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11))
                Resto = 0;
            if (Resto != parseInt(input.substring(9, 10)))
                return false;
            Soma = 0;
            for (let i = 1; i <= 10; i++) {
                Soma = Soma + parseInt(input.substring(i - 1, i)) * (12 - i);
            }
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11)) {
                Resto = 0;
            }
            if (Resto != parseInt(input.substring(10, 11))) {
                return false;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
    validateUnmasked(input) {
        if (this.isMasked(input)) {
            return false;
        }
        return this.validationRule.test(input) && this.checkCpfLogic(input);
    }
}
exports.default = CpfValidation;
