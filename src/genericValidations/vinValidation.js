"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regexValidation_1 = __importDefault(require("../regexValidation"));
class VinValidation extends regexValidation_1.default {
    constructor() {
        super(/^(?=.*\d|=.*[A-Z])(?=.*[A-z])[A-z0-9]{17}$/, '*** ****** ** ******');
    }
}
exports.default = VinValidation;
