import RegexValidation from "../src/regexValidation";

/*
    Esse teste usa CPF, sem validação dos dígitos verificadores, para testar
    a classe RegexValidation

*/

const regexValidation = new RegexValidation(/^\d{11}$/, '***.***.***-**');

// ATENÇÃO: CPF Gerado aleatóriamente no site https://www.4devs.com.br/gerador_de_cpf
const cpfMasked1 = '774.867.700-08';
const cpfMasked2 = '074.867.700-00';

const cpfUnmasked1 = '77486770008';
const cpfUnmasked2 = '07486770000';
const cpfWrongMasked = '774x867y700z08';

const invalidMasked = 'xxx.yyy.zzz-aa';
const invalidUnmasked = 'zz4867yu00ba';

const randomText = '35ybfghiu';


test('REGEX Validation: isMasked', () => {
    expect(regexValidation.isMasked(cpfMasked1)).toBe(true);
    expect(regexValidation.isMasked(cpfUnmasked1)).toBe(false);
    expect(regexValidation.isMasked(cpfWrongMasked)).toBe(false);
    expect(regexValidation.isMasked(invalidUnmasked)).toBe(false);
    // It is masked, but it's an invalid input.
    // This function only checks if it is masked.
    expect(regexValidation.isMasked(invalidMasked)).toBe(true/*It is masked*/);
    expect(regexValidation.isMasked(randomText)).toBe(false);
});

test('REGEX Validation: cleanMask', () => {

    expect(regexValidation.cleanMaskUnsafe(cpfMasked1)).toEqual(cpfUnmasked1);
    expect(regexValidation.cleanMaskUnsafe(cpfUnmasked1)).toEqual(cpfUnmasked1);

});

test('REGEX Validation: insertMask', () => {

    expect(regexValidation.insertMaskUnsafe(cpfUnmasked1)).toEqual(cpfMasked1);
    expect(regexValidation.insertMaskUnsafe(cpfUnmasked2)).toEqual(cpfMasked2);
    expect(regexValidation.insertMaskUnsafe(cpfMasked1)).toEqual(cpfMasked1);

})

test('REGEX Validation: validate', () => {

    expect(regexValidation.validate(cpfMasked1)).toBe(true);
    expect(regexValidation.validate(cpfUnmasked1)).toBe(true);
    expect(regexValidation.validate(randomText)).toBe(false);

});

test('REGEX Validation: validateMasked', () => {

    expect(regexValidation.validateMasked(cpfMasked1)).toBe(true);
    
    expect(regexValidation.validateMasked(cpfWrongMasked)).toBe(false);
    expect(regexValidation.validateMasked(invalidMasked)).toBe(false);

    expect(regexValidation.validateMasked(randomText)).toBe(false);
    expect(regexValidation.validateMasked(cpfUnmasked1)).toBe(false);

});

test('REGEX Validation: validateUnmasked', () => {

    expect(regexValidation.validateUnmasked(cpfUnmasked1)).toBe(true);
    expect(regexValidation.validateUnmasked(randomText)).toBe(false);
    expect(regexValidation.validateUnmasked(cpfMasked1)).toBe(false);

});

test('REGEX Validation: cleanMaskAndValidate', () => {

    expect(regexValidation.cleanMaskAndValidate(cpfUnmasked1)).toEqual(cpfUnmasked1);
    expect(() => regexValidation.cleanMaskAndValidate(invalidMasked)).toThrowError();

});

test('REGEX Validation: insertMaskAndValidate', () => {

    expect(regexValidation.insertMaskAndValidate(cpfMasked1)).toEqual(cpfMasked1);
    expect(() => regexValidation.insertMaskAndValidate(invalidUnmasked)).toThrowError();

});

// Short test for testing a "useless" mask
test('REGEX Validation: useless mask', () => {

    const val = new RegexValidation(/^\d{1}$/, '*');
    expect(val.isMasked('12')).toBe(false);
    expect(val.isMasked('1')).toBe(true);
    expect(val.validateUnmasked('1')).toBe(true);
    expect(val.validateMasked('1')).toBe(true);

})