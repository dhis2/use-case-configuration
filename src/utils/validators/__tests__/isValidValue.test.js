import { isValidValue } from '../isValidValue'

test('false is not a valid value', () => {
    expect(isValidValue(false)).toBeFalsy()
})

test('null is not a valid value', () => {
    expect(isValidValue(null)).toBeFalsy()
})

test('undefined is not valid value', () => {
    expect(isValidValue(undefined)).toBeFalsy()
})

test('NaN is not valid value', () => {
    expect(isValidValue(NaN)).toBeFalsy()
})

test('"" is not valid value', () => {
    expect(isValidValue('')).toBeFalsy()
})

test('5 is a valid value', () => {
    expect(isValidValue(5)).toBeTruthy()
})

test('"test text" is a valid value', () => {
    expect(isValidValue('test text')).toBeTruthy()
})

test('true is a valid value', () => {
    expect(isValidValue(true)).toBeTruthy()
})
