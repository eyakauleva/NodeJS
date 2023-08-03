import { calculateFactorial, power } from "../src/task4";

describe('calculateFactorial', () => {
    test('ok', () => {
        expect(calculateFactorial(6)).toEqual(720n);
        expect(() => calculateFactorial(2437)).not.toThrow();
    });

    test('validation', () => {
        expect(() => calculateFactorial("6")).toThrow(TypeError);
        expect(() => calculateFactorial(0)).toThrow(TypeError);
    });
});

describe('power', () => {
    test('ok', () => {
        expect(power(3, 3)).toEqual(27);
        expect(power(3, 0)).toEqual(1);
    });

    test('validation', () => {
        expect(() => power(3, -1)).toThrow(TypeError);
        expect(() => power("3", 0)).toThrow(TypeError);
    });
});