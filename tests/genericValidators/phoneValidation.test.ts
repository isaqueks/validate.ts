import PhoneValidation from "../../src/genericValidations/phoneValidation";

const phoneValidator = new PhoneValidation();

const validMaskedPhoneArray = [
    '+55 (51) 90000-0000',
    '+55 (51) 00000-0000',
    '(51) 90000-0000',
    '(51) 0000-0000',
    '90000-0000',
    '0000-0000'
]

const validUnmaskedPhoneArray = [
    '5551900000000',
    '5551000000000',
    '51900000000',
    '5100000000',
    '900000000',
    '00000000'
]

const invalidPhones = [
    '+XX (YY) 90000-0000',
    '+55 (51) 000AA-00ZZA',
    '+55 (51) 90000-00001',
    '55519000000001',
    'regrsdvdfg'
]

test('PhoneValidation: validate', () => {

    for (let i = 0; i < validMaskedPhoneArray.length; i++) {

        const validPhone = validMaskedPhoneArray[i];
        const validUnmaskedPhone = validUnmaskedPhoneArray[i];

        expect(phoneValidator.validate(validPhone)).toBe(true);
        expect(phoneValidator.validate(validUnmaskedPhone)).toBe(true);

    }

    for (const invalidPhone of invalidPhones) {

        expect(phoneValidator.validate(invalidPhone)).toBe(false);

    }

});

test('PhoneValidation: validateMasked', () => {

    for (let i = 0; i < validMaskedPhoneArray.length; i++) {

        const validPhone = validMaskedPhoneArray[i];
        const validUnmaskedPhone = validUnmaskedPhoneArray[i];

        expect(phoneValidator.validateMasked(validPhone)).toBe(true);
        expect(phoneValidator.validateMasked(validUnmaskedPhone)).toBe(false);

    }

    for (const invalidPhone of invalidPhones) {

        expect(phoneValidator.validateMasked(invalidPhone)).toBe(false);

    }

});

test('PhoneValidation: validateUnmasked', () => {

    for (let i = 0; i < validMaskedPhoneArray.length; i++) {

        const validPhone = validMaskedPhoneArray[i];
        const validUnmaskedPhone = validUnmaskedPhoneArray[i];

        expect(phoneValidator.validateUnmasked(validPhone)).toBe(false);
        expect(phoneValidator.validateUnmasked(validUnmaskedPhone)).toBe(true);

    }

    for (const invalidPhone of invalidPhones) {

        expect(phoneValidator.validateUnmasked(invalidPhone)).toBe(false);

    }

});

test('PhoneValidation: isMasked', () => {

    for (let i = 0; i < validMaskedPhoneArray.length; i++) {

        const validPhone = validMaskedPhoneArray[i];
        const validUnmaskedPhone = validUnmaskedPhoneArray[i];

        expect(phoneValidator.isMasked(validPhone)).toBe(true);
        expect(phoneValidator.isMasked(validUnmaskedPhone)).toBe(false);

    }

});

test('PhoneValidation: insertMaskUnsafe', () => {

    for (let i = 0; i < validMaskedPhoneArray.length; i++) {

        const validPhone = validMaskedPhoneArray[i];
        const validUnmaskedPhone = validUnmaskedPhoneArray[i];

        expect(phoneValidator.insertMaskUnsafe(validPhone)).toBe(validPhone);
        expect(phoneValidator.insertMaskUnsafe(validUnmaskedPhone)).toBe(validPhone);

    }

})

test('PhoneValidation: cleanMaskUnsafe', () => {

    for (let i = 0; i < validMaskedPhoneArray.length; i++) {

        const validPhone = validMaskedPhoneArray[i];
        const validUnmaskedPhone = validUnmaskedPhoneArray[i];

        expect(phoneValidator.cleanMaskUnsafe(validPhone)).toBe(validUnmaskedPhone);
        expect(phoneValidator.cleanMaskUnsafe(validUnmaskedPhone)).toBe(validUnmaskedPhone);

    }
})