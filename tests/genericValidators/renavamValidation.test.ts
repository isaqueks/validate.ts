import RenavamValidation from "../../src/genericValidations/renavamValidation";

const renavamValidator = new RenavamValidation();

const validRenavams = [
    '88855008974',
    '81825324056'
];
const invalidRenavams = [
    '8885500897A',
    '0081825324056aa',
    'fhfduhh'
];

test('RenavamValidation: validate, validateMasked, validateUnmasked', () => {

    for (const valid of validRenavams) {
        expect(renavamValidator.validateUnmasked(valid)).toBe(true);
        expect(renavamValidator.validateMasked(valid)).toBe(true);
        expect(renavamValidator.validate(valid)).toBe(true);
    }

    for (const invalid of invalidRenavams) {
        expect(renavamValidator.validateUnmasked(invalid)).toBe(false);
        expect(renavamValidator.validateMasked(invalid)).toBe(false);
        expect(renavamValidator.validate(invalid)).toBe(false);
    }

})