import VehicleMercosulPlateValidation from "../../src/genericValidations/vehicleMercosulPlateValidation";

const mercosulPlateValidator = new VehicleMercosulPlateValidation();

// From: Google Images
const validPlates = [
    'BRA2E19',
    'BRA0S17'
]

const invalidPlates = [
    'BRA2319',
    'BRAAS17'
]

test('VehicleOldPlateValidation: validate, validateMasked, validateUnmasked', () => {

    for (let i = 0; i < validPlates.length; i++) {
        const valid = validPlates[i];
        const invalid = invalidPlates[i];

        expect(mercosulPlateValidator.validate(valid)).toBe(true);
        expect(mercosulPlateValidator.validate(invalid)).toBe(false);


        // There is no "mask"
        expect(mercosulPlateValidator.validateMasked(valid)).toBe(false);

        expect(mercosulPlateValidator.validateUnmasked(valid)).toBe(true);

    }

});

test('VehicleOldPlateValidation: insertMask, cleanMask', () => {

    for (let i = 0; i < validPlates.length; i++) {
        const plate = validPlates[i];

        expect(mercosulPlateValidator.insertMaskUnsafe(plate)).toEqual(plate);
        expect(mercosulPlateValidator.cleanMaskUnsafe(plate)).toEqual(plate);

    }
    
});