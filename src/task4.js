import { isNumberValid } from "../src/common";

export function calculateFactorial(number, prevResult = 1) {
    if (!isNumberValid(number) || number < 0) {
        throw new TypeError("Value must be a positive number");
    }
    if(number === 1) {
        return BigInt(number) * BigInt(prevResult);
    } else {
        let newResult = BigInt(number) * BigInt(prevResult);
        return calculateFactorial(number - 1, newResult);
    }
}

export function power(base, exponent, prevResult = 1) {
    if (!isNumberValid(base) || !isNumberValid(exponent)) {
        throw new TypeError("Values must be numbers");
    }
    if (exponent < 0) {
        throw new TypeError("Exponent must be a positive number");
    }
    if (exponent === 0) {
        return 1 * prevResult;
    } else if (exponent === 1) {
        return base * prevResult;
    } else {
        exponent--;
        let newResult = base * prevResult;
        return power(base, exponent, newResult);
    }
}