import CnpjValidation from "../../src/genericValidations/cnpjValidation";

describe('CNPJValidation test', () => {

    const validMaskedCnpjs = [
        '91.056.261/0001-89',
        '38.933.057/0001-16',
        '97.623.912/0001-51'
    ]

    const validUnmaskedCnpjs = [
        '91056261000189',
        '38933057000116',
        '97623912000151'
    ]

    const invalidMaskedCnpjs = [
        '91.056.261/0001-88',
        '38.933.057/0001-15',
        '97.623.912/0001-50'
    ]

    const invalidUnmaskedCnpjs = [
        '91056261000188',
        '38933057000115',
        '97623912000150'
    ]

    const cnpjValidation = new CnpjValidation();

    test('Mask/Unmask and validation test on valid CNPJs', () => {
        for (let i = 0; i < validMaskedCnpjs.length; i++) {

            const masked = validMaskedCnpjs[i];
            const unmasked = validUnmaskedCnpjs[i];

            expect(cnpjValidation.isMasked(masked)).toBe(true);
            expect(cnpjValidation.isMasked(unmasked)).toBe(false);

            expect(cnpjValidation.validate(masked)).toBe(true);
            expect(cnpjValidation.validate(unmasked)).toBe(true);
        
            expect(cnpjValidation.cleanMaskAndValidate(masked)).toBe(unmasked);
            expect(cnpjValidation.insertMaskAndValidate(unmasked)).toBe(masked);

        }
    });

    test('Mask/Unmask and validation test on invalid CNPJs', () => {
        for (let i = 0; i < invalidMaskedCnpjs.length; i++) {

            const masked = invalidMaskedCnpjs[i];
            const unmasked = invalidUnmaskedCnpjs[i];

            expect(cnpjValidation.isMasked(masked)).toBe(true);
            expect(cnpjValidation.isMasked(unmasked)).toBe(false);

            expect(cnpjValidation.validate(masked)).toBe(false);
            expect(cnpjValidation.validate(unmasked)).toBe(false);
        
            expect(cnpjValidation.cleanMaskUnsafe(masked)).toBe(unmasked);
            expect(cnpjValidation.insertMaskUnsafe(unmasked)).toBe(masked);

        }
    })

});