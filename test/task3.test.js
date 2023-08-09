import { customShuffle } from "../src/task3";

describe('task 3', () => {

    test('customShuffle ok', () => {
        let original = [1,2,3,4,5,6,7,8,9,0,10,11];
        expect(customShuffle(original)).not.toEqual(original);
        
    });

    test('customShuffle validation', () => {
        expect(() => customShuffle({})).toThrow(TypeError);
        expect(() => customShuffle("")).toThrow(TypeError);
    });

});