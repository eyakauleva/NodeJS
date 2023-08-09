import { measureArrayPerformance } from "../src/task5";

describe('task5', () => {

    test('measureArrayPerformance ok', () => {
        let check = 0;
        let func = (array) => {
            array.forEach(item => check += item);
        };
        let time = measureArrayPerformance(func, [1,2,3]);
        expect(check).toEqual(6);
        expect(typeof time === "number").toEqual(true);
    });

    test('measureArrayPerformance validation', () => {
        expect(() => measureArrayPerformance(null, [1,2,3])).toThrow(TypeError);
        expect(() => measureArrayPerformance(()=>{}, undefined)).toThrow(TypeError);
    });

});