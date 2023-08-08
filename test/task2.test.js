import { chunkArray } from "../src/task2";

describe('task 2', () => {

    test('chunkArray ok', () => {
        let arr = [1,2,3,4,5,6,7];
        expect(chunkArray(arr, 3)).toEqual([[1,2,3],[4,5,6],[7]]);
    });

    test('chunkArray validation', () => {
        expect(() => chunkArray([], null)).toThrow();
        expect(() => chunkArray(null, 3)).toThrow();
    });

});