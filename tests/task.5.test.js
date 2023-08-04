import { lazyMap, fibonacciGenerator } from "../src/task5";

describe('lazyMap', () => {
    test('ok', () => {
        let values = [1,2,3];
        let mapFunc = (x) => x + 1;
        let lazyMapFunc = lazyMap(() => values, () => mapFunc);
        expect(lazyMapFunc()).toEqual(values[0] + 1);
        expect(lazyMapFunc()).toEqual(values[1] + 1);
        expect(lazyMapFunc()).toEqual(values[2] + 1);
    });

    test('index > array.length', () => {
        let values = [1];
        let mapFunc = (x) => x + 1;
        let lazyMapFunc = lazyMap(() => values, () => mapFunc);
        lazyMapFunc();
        expect(lazyMapFunc()).toEqual(undefined);
    });

    test('validation', () => {
        expect(() => lazyMap(() => NaN, () => 1)).toThrow(TypeError);
        expect(() => lazyMap(() => [1], () => undefined)).toThrow(TypeError);
    });
});

describe('fibonacciGenerator', () => {
    test('ok', () => {
        let generator = fibonacciGenerator();
        expect(generator()).toEqual(1);
        expect(generator()).toEqual(2);
        expect(generator()).toEqual(3);
        expect(generator()).toEqual(5);
        expect(generator()).toEqual(8);
        expect(generator()).toEqual(13);
    });
});