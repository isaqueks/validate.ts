"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regexValidation_1 = __importDefault(require("../regexValidation"));
class RenavamValidation extends regexValidation_1.default {
    constructor() {
        super(/\b[0-9]{11}\b/, '***********');
    }
}
exports.default = RenavamValidation;
