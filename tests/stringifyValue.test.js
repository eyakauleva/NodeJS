import { stringifyValue } from "../src/index";

test('number', () => {
    expect(stringifyValue(155)).toEqual("155");
});

test('symbol', () => {
    expect(stringifyValue(Symbol("abc"))).toEqual("abc");
});

test('null', () => {
    expect(stringifyValue(null)).toEqual("null");
});

test('undefined', () => {
    expect(stringifyValue(undefined)).toEqual("undefined");
});

test('object', () => {
    expect(stringifyValue({a: 123})).toEqual("{\"a\":123}");
});

test('string', () => {
    expect(stringifyValue("abc")).toEqual("abc");
});

test('bigint', () => {
    expect(stringifyValue(BigInt(5))).toEqual("5");
});