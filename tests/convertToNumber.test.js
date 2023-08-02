import { convertToNumber } from "../src/index";

test('number', () => {
    expect(convertToNumber(100)).toEqual(100);
});

test('boolean', () => {
    expect(convertToNumber(true)).toEqual(1);
});

test('boolean', () => {
    expect(convertToNumber(false)).toEqual(0);
});

test('bigint', () => {
    expect(convertToNumber(123n)).toEqual(123);
});

test('string', () => {
    expect(convertToNumber("-23.77")).toEqual(-23.77);
});

test('string', () => {
    expect(convertToNumber("-23.77qqqq")).toEqual(-23.77);
});

test('string', () => {
    expect(() => convertToNumber("qq-23.77qqqq")).toThrow(TypeError);
});

test('undefined', () => {
    expect(() => convertToNumber(undefined)).toThrow(TypeError);
});

test('null', () => {
    expect(() => convertToNumber(null)).toThrow(TypeError);
});

test('function', () => {
    expect(() => convertToNumber(function() {})).toThrow(TypeError);
});

test('object', () => {
    expect(() => convertToNumber({})).toThrow(TypeError);
});

test('NaN', () => {
    expect(() => convertToNumber(NaN)).toThrow(TypeError);
});

test('Infinity', () => {
    expect(() => convertToNumber(Number.NEGATIVE_INFINITY)).toThrow(TypeError);
});

test('symbol', () => {
    expect(() => convertToNumber(Symbol('abc'))).toThrow(TypeError);
});

test('symbol', () => {
    expect(convertToNumber(Symbol('134'))).toEqual(134);
});