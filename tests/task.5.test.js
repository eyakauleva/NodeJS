import { lazyMap, fibonacciGenerator, fibonacciGeneratorCached } from "../src/task5";

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

describe('fibonacciGeneratorCached', () => {
    test('ok', () => {
        let generator = fibonacciGeneratorCached();
        expect(generator(2)).toEqual(1);
        expect(generator(3)).toEqual(2);
        expect(generator(4)).toEqual(3);
        expect(generator(5)).toEqual(5);
        expect(generator(6)).toEqual(8);
        expect(generator(7)).toEqual(13);
    });
});