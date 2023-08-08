import { customFilterUnique } from "../src/task1";

describe('task 1', () => {

    test('customFilterUnique ok', () => {
        const array = [2,1,2,3,4,3,3,5,4];
        const callback = (value, index, array) => {
            return array.indexOf(value) === index;
        };
        expect(customFilterUnique(array, callback)).toEqual([2,1,3,4,5]);
    });

    test('customFilterUnique validation', () => {
        expect(() => customFilterUnique([], "")).toThrow(TypeError);
        expect(() => customFilterUnique(1243, () => {})).toThrow(TypeError);
    });

});