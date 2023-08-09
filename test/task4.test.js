import { getArrayIntersection, getArrayUnion } from "../src/task4";

describe('', () => {

    test('getArrayIntersection ok', () => {
        expect(getArrayIntersection([1,2,3,4], [5,2,3,7,4,0])).toEqual([2,3,4]);
    });

    test('getArrayIntersection validation', () => {
        expect(() => getArrayIntersection([1,2,3,4], undefined)).toThrow(TypeError);
        expect(() => getArrayIntersection(null, [1,2,3,4])).toThrow(TypeError);
    });

    test('getArrayUnion ok', () => {
        expect(getArrayUnion([1,2,3,4], [5,2,3,7,4,0])).toEqual([1,2,3,4,5,7,0]);
    });

    test('getArrayUnion validation', () => {
        expect(() => getArrayUnion([1,2,3,4], undefined)).toThrow(TypeError);
        expect(() => getArrayUnion(null, [1,2,3,4])).toThrow(TypeError);
    });

});