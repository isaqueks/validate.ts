import CpfValidation from "../../src/genericValidations/cpfValidation";
/*
    Esse teste usa CPF, sem validação dos dígitos verificadores, para testar
    a classe RegexValidation

*/

const cpfValidation = new CpfValidation();

const invalidCpf1 = '555.555.555-55';
const invalidCpf2 = '77486770001';

const invalidUnmaskedCpf = '55555555555';

// ATENÇÃO: CPF Gerado aleatóriamente no site https://www.4devs.com.br/gerador_de_cpf
const cpfMasked = '774.867.700-08';
const cpfUnmasked = '77486770008';
const cpfWrongMasked = '774x867y700z08';

const invalidMasked = 'xxx.yyy.zzz-aa';
const invalidUnmasked = 'zz4867yu00ba';

const randomText = '35ybfghiu';

test('CPF Validation: validateUnmasked', () => {

    expect(cpfValidation.validateUnmasked(cpfMasked)).toEqual(false);
    expect(cpfValidation.validateUnmasked(cpfUnmasked)).toEqual(true);
    expect(cpfValidation.validateUnmasked(invalidCpf1)).toEqual(false);
    expect(cpfValidation.validateUnmasked(invalidCpf2)).toEqual(false);
    expect(cpfValidation.validateUnmasked(invalidUnmaskedCpf)).toEqual(false);

});

test('CPF Validation: validation', () => {

    expect(cpfValidation.validate(cpfMasked)).toEqual(true);
    expect(cpfValidation.validate(cpfUnmasked)).toEqual(true);
    expect(cpfValidation.validate(invalidUnmasked)).toEqual(false);
    expect(cpfValidation.validate(invalidMasked)).toEqual(false);
    expect(cpfValidation.validate(randomText)).toEqual(false);
    expect(cpfValidation.validate(cpfWrongMasked)).toEqual(false);
    expect(cpfValidation.validate(invalidCpf1)).toEqual(false);
    expect(cpfValidation.validate(invalidCpf2)).toEqual(false);

});