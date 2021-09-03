"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regexValidation_1 = __importDefault(require("../regexValidation"));
/**
 * Validates old brazilian vehicle plates (AAA-0000)
 */
class VehicleOldPlateValidation extends regexValidation_1.default {
    constructor() {
        super(/^[A-z]{3}[0-9]{4}$/, '***-****');
    }
}
exports.default = VehicleOldPlateValidation;
