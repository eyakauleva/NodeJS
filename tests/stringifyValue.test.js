import { stringifyValue } from "../src/index";

test('number', () => {
    expect(stringifyValue(155)).toBe("155");
});

test('symbol', () => {
    expect(stringifyValue(Symbol("abc"))).toBe("abc");
});

test('null', () => {
    expect(stringifyValue(null)).toBe("null");
});

test('undefined', () => {
    expect(stringifyValue(undefined)).toBe("undefined");
});

test('object', () => {
    expect(stringifyValue({a: 123})).toBe("{\"a\":123}");
});

test('string', () => {
    expect(stringifyValue("abc")).toBe("abc");
});

test('bigint', () => {
    expect(stringifyValue(BigInt(5))).toBe("5");
});