import { convertToNumber } from "../src/index";

test('number', () => {
    expect(convertToNumber(100)).toBe(100);
});

test('boolean', () => {
    expect(convertToNumber(true)).toBe(1);
});

test('boolean', () => {
    expect(convertToNumber(false)).toBe(0);
});

test('bigint', () => {
    expect(convertToNumber(123n)).toBe(123);
});

test('string', () => {
    expect(convertToNumber("-23.77")).toBe(-23.77);
});

test('string', () => {
    expect(convertToNumber("-23.77qqqq")).toBe(-23.77);
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
    expect(convertToNumber(Symbol('134'))).toBe(134);
});