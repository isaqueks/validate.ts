import VehiclePlateValidation from "../../src/genericValidations/vehiclePlateValidation";

const plateValidator = new VehiclePlateValidation();

// From: https://www.4devs.com.br/gerador_de_placa_automoveis
const validMaskedPlates = [
    'JZJ-5869',
    'LHA-6920',
    'BRA2E19',
    'BRA0S17'
]

const validUnmaskedPlates = [
    'JZJ5869',
    'LHA6920',
    'BRA2E19',
    'BRA0S17'
]

const invalidPlates = [
    'JZJ586A',
    '4HA6920',
    'BRA!319',
    'BRAAS17'
]

test('VehiclePlateValidation: validate, validateMasked, validateUnmasked', () => {

    for (let i = 0; i < validMaskedPlates.length; i++) {
        const masked = validMaskedPlates[i];
        const unmasked = validUnmaskedPlates[i];
        const invalid = invalidPlates[i];

        expect(plateValidator.validate(masked)).toBe(true);
        expect(plateValidator.validate(unmasked)).toBe(true);

        expect(plateValidator.validate(invalid)).toBe(false);

        expect(plateValidator.validateMasked(masked)).toBe(true);
        
        expect(plateValidator.validateUnmasked(unmasked)).toBe(true);

    }

});

test('VehiclePlateValidation: insertMask, cleanMask', () => {

    for (let i = 0; i < validMaskedPlates.length; i++) {
        const masked = validMaskedPlates[i];
        const unmasked = validUnmaskedPlates[i];

        expect(plateValidator.insertMaskUnsafe(unmasked)).toEqual(masked);
        expect(plateValidator.cleanMaskUnsafe(masked)).toEqual(unmasked);

    }
    
});