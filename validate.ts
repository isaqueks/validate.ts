// Base classes
import InputValidation from "./src/inputValidation";
import MultipleValidation from "./src/multipleValidation";
import RegexValidation from "./src/regexValidation";

// Validations
import CepValidation from "./src/genericValidations/cepValidation";
import CnpjValidation from "./src/genericValidations/cnpjValidation";
import CpfValidation from "./src/genericValidations/cpfValidation";
import PhoneValidation from "./src/genericValidations/phoneValidation";
import DateValidation from "./src/genericValidations/dateValidation";
import RenavamValidation from "./src/genericValidations/renavamValidation";
import VehicleMercosulPlateValidation from "./src/genericValidations/vehicleMercosulPlateValidation";
import VehicleOldPlateValidation from "./src/genericValidations/vehicleOldPlateValidation";
import VehiclePlateValidation from "./src/genericValidations/vehiclePlateValidation";
import VinValidation from "./src/genericValidations/vinValidation";
import DocumentValidation from "./src/genericValidations/documentValidation";

export {
    DateValidation,
    RenavamValidation,
    VehicleMercosulPlateValidation,
    VehicleOldPlateValidation,
    VehiclePlateValidation,
    VinValidation,
    CepValidation,
    CpfValidation,
    CnpjValidation,
    PhoneValidation,
    DocumentValidation,
    InputValidation,
    MultipleValidation,
    RegexValidation
}