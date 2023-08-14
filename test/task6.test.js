import { curry, partial } from "../src/task6";

describe('task 6', () => {
    const multiply = function (a, b, c) {  
        return a * b * c;  
    };

    test('curry ok', () => {
        const curriedMultiply = curry(multiply, 3);  
        const step1 = curriedMultiply(2);
        const step2 = step1(3);
        const result = step2(4);
        expect(typeof curriedMultiply).toEqual("function");
        expect(typeof step1).toEqual("function");
        expect(typeof step2).toEqual("function");
        expect(result).toEqual(24);
    });

    test('curry validation', () => {
        expect(() => curry(undefined, 4)).toThrow(TypeError);
        expect(() => curry(() => {}, null)).toThrow(TypeError);
    });

    test('partial ok [no underscore]', () => {
        const partialMultiply = partial(multiply, 3);  
        const step1 = partialMultiply(2, 3);
        const result = step1(4);
        expect(result).toEqual(24);
    });

    test('partial ok [with underscore]', () => {
        const partialMultiply = partial(multiply, 3);  
        const step1 = partialMultiply(2, '_');
        const step2 = step1(3);
        const step3 = step2('_');
        const result = step3(4);
        expect(typeof partialMultiply).toEqual("function");
        expect(typeof step1).toEqual("function");
        expect(typeof step2).toEqual("function");
        expect(typeof step3).toEqual("function");
        expect(result).toEqual(24);
    });

});