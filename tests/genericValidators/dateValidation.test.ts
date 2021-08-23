import DateValidation from "../../src/genericValidations/dateValidation";

const dateValidator1 = new DateValidation('DD/MM/YYYY');
const dateValidator2 = new DateValidation('MM/DD/YYYY');

const validMaskedDates1 = [
    '00/00/0000',
    '31/12/2021',
    '10/10/1000'
];

const validUnmaskedDates1 = [
    '00000000',
    '31122021',
    '10101000'
]

const invalidMaskedDates1 = [
    '32/13/2021',
    '32/10/2000',
    '10/13/0000',
    'AA/BB/CCCC'
]

const invalidUnmaskedDates1 = [
    '32132021',
    '32102000',
    '10130000',
    'AABBCCCC'
]

const validMaskedDates2 = [
    '00/00/0000',
    '12/31/2021',
    '10/10/1000'
];

const validUnmaskedDates2 = [
    '00000000',
    '12312021',
    '10101000'
]

const invalidMaskedDates2 = [
    '13/32/2021',
    '10/32/2000',
    '13/10/0000',
    'BB/AA/CCCC'
]

const invalidUnmaskedDates2 = [
    '13322021',
    '10322000',
    '13100000',
    'BBAACCCC'
]

// Date validation 1: DD/MM/YYYY
test('DateValidation1: validation', () => {
    
    for (const validMaskedDate1 of validMaskedDates1) {
        expect(dateValidator1.validate(validMaskedDate1)).toBe(true);
    }
    for (const validUnmaskedDate1 of validUnmaskedDates1) {
        expect(dateValidator1.validate(validUnmaskedDate1)).toBe(true);
    }

    for (const invalidMaskedDate1 of invalidMaskedDates1) {
        expect(dateValidator1.validate(invalidMaskedDate1)).toBe(false);
    }
    for (const invalidUnmaskedDate1 of invalidUnmaskedDates1) {
        expect(dateValidator1.validate(invalidUnmaskedDate1)).toBe(false);
    }

});

test('DateValidation1: validateMasked', () => {
    
    for (const validMaskedDate1 of validMaskedDates1) {
        expect(dateValidator1.validateMasked(validMaskedDate1)).toBe(true);
    }
    for (const validUnmaskedDate1 of validUnmaskedDates1) {
        expect(dateValidator1.validateMasked(validUnmaskedDate1)).toBe(false);
    }

    for (const invalidMaskedDate1 of invalidMaskedDates1) {
        expect(dateValidator1.validateMasked(invalidMaskedDate1)).toBe(false);
    }
    for (const invalidUnmaskedDate1 of invalidUnmaskedDates1) {
        expect(dateValidator1.validateMasked(invalidUnmaskedDate1)).toBe(false);
    }

});

test('DateValidation1: validateUnmasked', () => {
    
    for (const validMaskedDate1 of validMaskedDates1) {
        expect(dateValidator1.validateUnmasked(validMaskedDate1)).toBe(false);
    }
    for (const validUnmaskedDate1 of validUnmaskedDates1) {
        expect(dateValidator1.validateUnmasked(validUnmaskedDate1)).toBe(true);
    }

    for (const invalidMaskedDate1 of invalidMaskedDates1) {
        expect(dateValidator1.validateUnmasked(invalidMaskedDate1)).toBe(false);
    }
    for (const invalidUnmaskedDate1 of invalidUnmaskedDates1) {
        expect(dateValidator1.validateUnmasked(invalidUnmaskedDate1)).toBe(false);
    }

});

test('DateValidation1: insertMaskUnsafe', () => {
    
    for (let i = 0; i < validMaskedDates1.length; i++) {
        const validMasked = validMaskedDates1[i];
        const validUnmasked = validUnmaskedDates1[i];

        expect(dateValidator1.insertMaskUnsafe(validUnmasked)).toEqual(validMasked);
    }

    for (let i = 0; i < invalidMaskedDates1.length; i++) {
        const invalidMasked = invalidMaskedDates1[i];
        const invalidUnmasked = invalidUnmaskedDates1[i];

        // It's invalid, but insertMaskUnsafe only inserts the mask, doesn't validate anything
        expect(dateValidator1.insertMaskUnsafe(invalidUnmasked)).toEqual(invalidMasked);
    }

});

test('DateValidation1: cleanMaskUnsafe', () => {
    
    for (let i = 0; i < validMaskedDates1.length; i++) {
        const validMasked = validMaskedDates1[i];
        const validUnmasked = validUnmaskedDates1[i];

        expect(dateValidator1.cleanMaskUnsafe(validMasked)).toEqual(validUnmasked);
    }

    for (let i = 0; i < invalidMaskedDates1.length; i++) {
        const invalidMasked = invalidMaskedDates1[i];
        const invalidUnmasked = invalidUnmaskedDates1[i];

        // It's invalid, but cleanMaskUnsafe only removes the mask, doesn't validate anything
        expect(dateValidator1.cleanMaskUnsafe(invalidMasked)).toEqual(invalidUnmasked);
    }

});



// Date validation 2: MM/DD/YYYY
test('DateValidation2: validation', () => {
    
    for (const validMaskedDate2 of validMaskedDates2) {
        expect(dateValidator2.validate(validMaskedDate2)).toBe(true);
    }
    for (const validUnmaskedDate2 of validUnmaskedDates2) {
        expect(dateValidator2.validate(validUnmaskedDate2)).toBe(true);
    }

    for (const invalidMaskedDate2 of invalidMaskedDates2) {
        expect(dateValidator2.validate(invalidMaskedDate2)).toBe(false);
    }
    for (const invalidUnmaskedDate2 of invalidUnmaskedDates2) {
        expect(dateValidator2.validate(invalidUnmaskedDate2)).toBe(false);
    }

});

test('DateValidation2: validateMasked', () => {
    
    for (const validMaskedDate2 of validMaskedDates2) {
        expect(dateValidator2.validateMasked(validMaskedDate2)).toBe(true);
    }
    for (const validUnmaskedDate2 of validUnmaskedDates2) {
        expect(dateValidator2.validateMasked(validUnmaskedDate2)).toBe(false);
    }

    for (const invalidMaskedDate2 of invalidMaskedDates2) {
        expect(dateValidator2.validateMasked(invalidMaskedDate2)).toBe(false);
    }
    for (const invalidUnmaskedDate2 of invalidUnmaskedDates2) {
        expect(dateValidator2.validateMasked(invalidUnmaskedDate2)).toBe(false);
    }

});

test('DateValidation2: validateUnmasked', () => {
    
    for (const validMaskedDate2 of validMaskedDates2) {
        expect(dateValidator2.validateUnmasked(validMaskedDate2)).toBe(false);
    }
    for (const validUnmaskedDate2 of validUnmaskedDates2) {
        expect(dateValidator2.validateUnmasked(validUnmaskedDate2)).toBe(true);
    }

    for (const invalidMaskedDate2 of invalidMaskedDates2) {
        expect(dateValidator2.validateUnmasked(invalidMaskedDate2)).toBe(false);
    }
    for (const invalidUnmaskedDate2 of invalidUnmaskedDates2) {
        expect(dateValidator2.validateUnmasked(invalidUnmaskedDate2)).toBe(false);
    }

});

test('DateValidation2: insertMaskUnsafe', () => {
    
    for (let i = 0; i < validMaskedDates2.length; i++) {
        const validMasked = validMaskedDates2[i];
        const validUnmasked = validUnmaskedDates2[i];

        expect(dateValidator2.insertMaskUnsafe(validUnmasked)).toEqual(validMasked);
    }

    for (let i = 0; i < invalidMaskedDates2.length; i++) {
        const invalidMasked = invalidMaskedDates2[i];
        const invalidUnmasked = invalidUnmaskedDates2[i];

        // It's invalid, but insertMaskUnsafe only inserts the mask, doesn't validate anything
        expect(dateValidator2.insertMaskUnsafe(invalidUnmasked)).toEqual(invalidMasked);
    }

});

test('DateValidation2: cleanMaskUnsafe', () => {
    
    for (let i = 0; i < validMaskedDates2.length; i++) {
        const validMasked = validMaskedDates2[i];
        const validUnmasked = validUnmaskedDates2[i];

        expect(dateValidator2.cleanMaskUnsafe(validMasked)).toEqual(validUnmasked);
    }

    for (let i = 0; i < invalidMaskedDates2.length; i++) {
        const invalidMasked = invalidMaskedDates2[i];
        const invalidUnmasked = invalidUnmaskedDates2[i];

        // It's invalid, but cleanMaskUnsafe only removes the mask, doesn't validate anything
        expect(dateValidator2.cleanMaskUnsafe(invalidMasked)).toEqual(invalidUnmasked);
    }

});