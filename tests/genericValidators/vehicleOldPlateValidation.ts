import VehicleOldPlateValidation from "../../src/genericValidations/vehicleOldPlateValidation";

const oldPlateValidator = new VehicleOldPlateValidation();

// From: https://www.4devs.com.br/gerador_de_placa_automoveis
const validMaskedPlates = [
    'JZJ-5869',
    'LHA-6920'
]

const validUnmaskedPlates = [
    'JZJ5869',
    'LHA6920'
]

const invalidPlates = [
    'JZJ586A',
    '4HA6920'
]

test('VehicleOldPlateValidation: validate, validateMasked, validateUnmasked', () => {

    for (let i = 0; i < validMaskedPlates.length; i++) {
        const masked = validMaskedPlates[i];
        const unmasked = validUnmaskedPlates[i];
        const invalid = invalidPlates[i];

        expect(oldPlateValidator.validate(masked)).toBe(true);
        expect(oldPlateValidator.validate(unmasked)).toBe(true);
        expect(oldPlateValidator.validate(invalid)).toBe(false);


        expect(oldPlateValidator.validateMasked(masked)).toBe(true);
        expect(oldPlateValidator.validateMasked(unmasked)).toBe(false);

        expect(oldPlateValidator.validateUnmasked(masked)).toBe(false);
        expect(oldPlateValidator.validateUnmasked(unmasked)).toBe(true);

    }

});

test('VehicleOldPlateValidation: insertMask, cleanMask', () => {

    for (let i = 0; i < validMaskedPlates.length; i++) {
        const masked = validMaskedPlates[i];
        const unmasked = validUnmaskedPlates[i];

        expect(oldPlateValidator.insertMaskUnsafe(unmasked)).toEqual(masked);
        expect(oldPlateValidator.cleanMaskUnsafe(masked)).toEqual(unmasked);

    }
    
});