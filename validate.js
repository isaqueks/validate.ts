"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexValidation = exports.MultipleValidation = exports.InputValidation = exports.DocumentValidation = exports.PhoneValidation = exports.CnpjValidation = exports.CpfValidation = exports.CepValidation = exports.VinValidation = exports.VehiclePlateValidation = exports.VehicleOldPlateValidation = exports.VehicleMercosulPlateValidation = exports.RenavamValidation = exports.DateValidation = void 0;
// Base classes
const inputValidation_1 = __importDefault(require("./src/inputValidation"));
exports.InputValidation = inputValidation_1.default;
const multipleValidation_1 = __importDefault(require("./src/multipleValidation"));
exports.MultipleValidation = multipleValidation_1.default;
const regexValidation_1 = __importDefault(require("./src/regexValidation"));
exports.RegexValidation = regexValidation_1.default;
// Validations
const cepValidation_1 = __importDefault(require("./src/genericValidations/cepValidation"));
exports.CepValidation = cepValidation_1.default;
const cnpjValidation_1 = __importDefault(require("./src/genericValidations/cnpjValidation"));
exports.CnpjValidation = cnpjValidation_1.default;
const cpfValidation_1 = __importDefault(require("./src/genericValidations/cpfValidation"));
exports.CpfValidation = cpfValidation_1.default;
const phoneValidation_1 = __importDefault(require("./src/genericValidations/phoneValidation"));
exports.PhoneValidation = phoneValidation_1.default;
const dateValidation_1 = __importDefault(require("./src/genericValidations/dateValidation"));
exports.DateValidation = dateValidation_1.default;
const renavamValidation_1 = __importDefault(require("./src/genericValidations/renavamValidation"));
exports.RenavamValidation = renavamValidation_1.default;
const vehicleMercosulPlateValidation_1 = __importDefault(require("./src/genericValidations/vehicleMercosulPlateValidation"));
exports.VehicleMercosulPlateValidation = vehicleMercosulPlateValidation_1.default;
const vehicleOldPlateValidation_1 = __importDefault(require("./src/genericValidations/vehicleOldPlateValidation"));
exports.VehicleOldPlateValidation = vehicleOldPlateValidation_1.default;
const vehiclePlateValidation_1 = __importDefault(require("./src/genericValidations/vehiclePlateValidation"));
exports.VehiclePlateValidation = vehiclePlateValidation_1.default;
const vinValidation_1 = __importDefault(require("./src/genericValidations/vinValidation"));
exports.VinValidation = vinValidation_1.default;
const documentValidation_1 = __importDefault(require("./src/genericValidations/documentValidation"));
exports.DocumentValidation = documentValidation_1.default;
