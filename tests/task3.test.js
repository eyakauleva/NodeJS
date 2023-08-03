import { createCounter, repeatFunction } from "../src/task3";
import {jest} from '@jest/globals';

describe('createCounter', () => {
    test('ok', () => {
        let one = createCounter();
        expect(one()).toEqual(1);
        let two = createCounter();
        expect(two()).toEqual(1);
        expect(one()).toEqual(2);
        expect(two()).toEqual(2);
        one();
        one();
        one();
        one();
        one();
        expect(two()).toEqual(3);
        expect(one()).toEqual(8);
    });
});

describe('repeatFunction', () => {
    const mockCallback = jest.fn();
    
    beforeEach(() => {
        mockCallback.mockClear();
    });

    test('should be called provided times', () => {
        let times = 5;
        const repeatedFunction = repeatFunction(mockCallback, times);
        repeatedFunction();
        expect(mockCallback).toHaveBeenCalledTimes(times);
    });

    test('should be called infinitely', () => {
        let times = -10;
        let stopCall = 15;
        const stopCondition = () => mockCallback.mock.calls.length === stopCall;
        const repeatedFunction = repeatFunction(mockCallback, times, stopCondition);
        repeatedFunction();
        expect(mockCallback.mock.calls.length > times).toEqual(true);
        expect(mockCallback.mock.calls.length === stopCall).toEqual(true);
    });
    
    test('validation', () => {
        expect(() => repeatFunction(null, 5)()).toThrow(TypeError);
        expect(() => repeatFunction(()=>{}, "lalala")()).toThrow(TypeError);
    });
});