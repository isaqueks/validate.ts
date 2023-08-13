"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multipleValidation_1 = __importDefault(require("../multipleValidation"));
const cnpjValidation_1 = __importDefault(require("./cnpjValidation"));
const cpfValidation_1 = __importDefault(require("./cpfValidation"));
class DocumentValidation extends multipleValidation_1.default {
    constructor() {
        super([
            DocumentValidation.CPF_VALIDATION,
            DocumentValidation.CNPJ_VALIDATION
        ]);
    }
}
exports.default = DocumentValidation;
DocumentValidation.CPF_VALIDATION = new cpfValidation_1.default();
DocumentValidation.CNPJ_VALIDATION = new cnpjValidation_1.default();
