"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multipleValidation_1 = __importDefault(require("../multipleValidation"));
const vehicleMercosulPlateValidation_1 = __importDefault(require("./vehicleMercosulPlateValidation"));
const vehicleOldPlateValidation_1 = __importDefault(require("./vehicleOldPlateValidation"));
const OLD_PLATE_VALIDATOR = new vehicleOldPlateValidation_1.default();
const MERCOSUL_PLATE_VALIDATOR = new vehicleMercosulPlateValidation_1.default();
/**
 * Both old and mercosul plates
 */
class VehiclePlateValidation extends multipleValidation_1.default {
    constructor() {
        super([
            OLD_PLATE_VALIDATOR,
            MERCOSUL_PLATE_VALIDATOR
        ]);
    }
}
exports.default = VehiclePlateValidation;
