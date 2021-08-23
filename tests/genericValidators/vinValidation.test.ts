import VinValidation from "../../src/genericValidations/vinValidation";

const vinValidator = new VinValidation();

const validMaskedVins = [
    '1YY 11LAYN Lj n45700',
    '1RA bAyLTa Uv 4X6814',
    '7X3 mA3ul2 9n fL3683'
];

const validUnmaskedVins = [
    '1YY11LAYNLjn45700',
    '1RAbAyLTaUv4X6814',
    '7X3mA3ul29nfL3683'
];

const invalidVins = [
    '8885500897A',
    '0081825324056aa',
    'fhfduhh'
];

test('VinValidation: validate, validateMasked, validateUnmasked', () => {

    for (let i = 0; i < validMaskedVins.length; i++) {

        const masked = validMaskedVins[i];
        const unmasked = validUnmaskedVins[i];

        expect(vinValidator.validateUnmasked(masked)).toBe(false);
        expect(vinValidator.validateMasked(unmasked)).toBe(false);

        expect(vinValidator.validateUnmasked(unmasked)).toBe(true);
        expect(vinValidator.validateMasked(masked)).toBe(true);

        expect(vinValidator.validate(masked)).toBe(true);
        expect(vinValidator.validate(unmasked)).toBe(true);
    }

    for (const invalid of invalidVins) {
        expect(vinValidator.validateUnmasked(invalid)).toBe(false);
        expect(vinValidator.validateMasked(invalid)).toBe(false);
        expect(vinValidator.validate(invalid)).toBe(false);
    }

})

test('VinValidation: insertMask, cleanMask', () => {

    for (let i = 0; i < validMaskedVins.length; i++) {

        const masked = validMaskedVins[i];
        const unmasked = validUnmaskedVins[i];

        expect(vinValidator.insertMaskUnsafe(unmasked)).toEqual(masked);
        expect(vinValidator.cleanMaskUnsafe(masked)).toEqual(unmasked);

        expect(vinValidator.insertMaskUnsafe(masked)).toEqual(masked);
        expect(vinValidator.cleanMaskUnsafe(unmasked)).toEqual(unmasked);

    }

});