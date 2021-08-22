import MultipleValidation from "../src/multipleValidation";
import RegexValidation from "../src/regexValidation";

const crazyValidation1 = new RegexValidation(/^\d{1}$/, '*');
const crazyValidation2 = new RegexValidation(/^\d{2}$/, '*-*');
const crazyValidation3 = new RegexValidation(/^\d{3}$/, '.***.');

const validValue1 = '5';
const validValue2 = '2-6';
const validValue3 = '.456.';

const validUnmaskedValue2 = '26';
const validUnmaskedValue3 = '456';


const invalidValue = 'zabhdf'

const multipleValidation = new MultipleValidation([
    crazyValidation1,
    crazyValidation2,
    crazyValidation3
]);


test('MultipleValidation: validation', () => {

    expect(multipleValidation.validate(validValue1)).toBe(true);
    expect(multipleValidation.validate(validValue2)).toBe(true);
    expect(multipleValidation.validate(validUnmaskedValue2)).toBe(true);
    expect(multipleValidation.validate(validValue3)).toBe(true);
    expect(multipleValidation.validate(invalidValue)).toBe(false);

});

test('MultipleValidation: cleanMaskUnsafe', () => {

    expect(multipleValidation.cleanMaskUnsafe(validValue1)).toEqual(validValue1);
    expect(multipleValidation.cleanMaskUnsafe(validValue2)).toEqual(validUnmaskedValue2);
    expect(multipleValidation.cleanMaskUnsafe(validValue3)).toEqual(validUnmaskedValue3);

});

test('MultipleValidation: insertMaskUnsafe', () => {

    expect(multipleValidation.insertMaskUnsafe(validValue1)).toEqual(validValue1);
    expect(multipleValidation.insertMaskUnsafe(validUnmaskedValue2)).toEqual(validValue2);
    expect(multipleValidation.insertMaskUnsafe(validValue3)).toEqual(validValue3);

});

test('MultipleValidation: getWhichValidates', () => {

    expect(multipleValidation.getWhichValidates(validValue1)).toEqual(crazyValidation1);
    expect(multipleValidation.getWhichValidates(validValue2)).toEqual(crazyValidation2);
    expect(multipleValidation.getWhichValidates(validUnmaskedValue2)).toEqual(crazyValidation2);
    expect(multipleValidation.getWhichValidates(validValue3)).toEqual(crazyValidation3);
    expect(multipleValidation.getWhichValidates(invalidValue)).toEqual(null);

});

test('MultipleValidation: validateMasked', () => {

    expect(multipleValidation.validateMasked(validValue1)).toBe(true);
    expect(multipleValidation.validateMasked(validValue2)).toBe(true);
    expect(multipleValidation.validateMasked(validUnmaskedValue2)).toBe(false);
    expect(multipleValidation.validateMasked(validValue3)).toBe(true);
    expect(multipleValidation.validateMasked(invalidValue)).toBe(false);

});

test('MultipleValidation: validateUnmasked', () => {

    expect(multipleValidation.validateUnmasked(validValue1)).toBe(true);
    expect(multipleValidation.validateUnmasked(validValue2)).toBe(false);
    expect(multipleValidation.validateUnmasked(validUnmaskedValue2)).toBe(true);
    expect(multipleValidation.validateUnmasked(validValue3)).toBe(false);
    expect(multipleValidation.validateUnmasked(invalidValue)).toBe(false);

});