import CepValidation from "../../src/genericValidations/cepValidation";

const cepValidator = new CepValidation();

const validMaskedCep = '93336-000';
const validUnmaskedCep = '93336000';

const invalidMaskedCep = 'xyzab-cde';
const invalidUnmaskedCep = 'xyzabcde';

const totallyInvalidCep = '3df933360004rg';

test('CepValidation: validate', () => {

    expect(cepValidator.validate(validMaskedCep)).toBe(true);
    expect(cepValidator.validate(validUnmaskedCep)).toBe(true);

    expect(cepValidator.validate(invalidMaskedCep)).toBe(false);
    expect(cepValidator.validate(invalidUnmaskedCep)).toBe(false);

    expect(cepValidator.validate(totallyInvalidCep)).toBe(false);

});

test('CepValidation: validateMasked', () => {

    expect(cepValidator.validateMasked(validMaskedCep)).toBe(true);
    expect(cepValidator.validateMasked(validUnmaskedCep)).toBe(false);

    expect(cepValidator.validateMasked(invalidMaskedCep)).toBe(false);
    expect(cepValidator.validateMasked(invalidUnmaskedCep)).toBe(false);

    expect(cepValidator.validateMasked(totallyInvalidCep)).toBe(false);

});

test('CepValidation: validateUnmasked', () => {

    expect(cepValidator.validateUnmasked(validMaskedCep)).toBe(false);
    expect(cepValidator.validateUnmasked(validUnmaskedCep)).toBe(true);

    expect(cepValidator.validateUnmasked(invalidMaskedCep)).toBe(false);
    expect(cepValidator.validateUnmasked(invalidUnmaskedCep)).toBe(false);

    expect(cepValidator.validateUnmasked(totallyInvalidCep)).toBe(false);

});

test('CepValidation: isMasked', () => {

    expect(cepValidator.isMasked(validMaskedCep)).toBe(true);
    expect(cepValidator.isMasked(validUnmaskedCep)).toBe(false);
    expect(cepValidator.isMasked(invalidMaskedCep)).toBe(true);

});

test('CepValidation: insertMaskUnsafe', () => {

    expect(cepValidator.insertMaskUnsafe(validUnmaskedCep)).toEqual(validMaskedCep);
    expect(cepValidator.insertMaskUnsafe(invalidUnmaskedCep)).toEqual(invalidMaskedCep);

})

test('CepValidation: cleanMaskUnsafe', () => {

    expect(cepValidator.cleanMaskUnsafe(validMaskedCep)).toEqual(validUnmaskedCep);
    expect(cepValidator.cleanMaskUnsafe(invalidMaskedCep)).toEqual(invalidUnmaskedCep);

})