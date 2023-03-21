/**
 * A valid value it is consider if it is:
 * value == true
 * */

export const isValidValue = (value) =>
    ![null, '', false, undefined, NaN].includes(value)
