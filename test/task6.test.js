import { curry } from "../src/task6";

describe('task 6', () => {

    test('curry ok', () => {
        const multiply = function (a, b, c) {  
            return a * b * c;  
        } 
        const curriedMultiply = curry(multiply, 3);  
        const step1 = curriedMultiply(2);
        const step2 = step1(3);
        const result = step2(4);
        expect(result).toEqual(24);
    });

    test('curry validation', () => {
        expect(() => curry(undefined, 4)).toThrow(TypeError);
        expect(() => curry(() => {}, null)).toThrow(TypeError);
    });

});