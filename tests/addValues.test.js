import { addValues } from "../src/index";

test('number + number = number', () => {
    expect(addValues(100, 55)).toEqual(155);
});

test('array + bool = array', () => {
    expect(addValues([5,6], true)).toEqual([5, 6, true]);
});

test('string + bool = string', () => {
    expect(addValues("543.987", true)).toEqual("543.987true");
});

test('string + number = string', () => {
    expect(addValues("10.2", 55)).toEqual("10.255");
});

test('bool + number = bool', () => {
    expect(addValues(false, 55)).toEqual(false);
});

test('undefined + number = ERROR', () => {
    expect(() => addValues(undefined, 55)).toThrow(TypeError);
});

test('function + number = ERROR', () => {
    expect(() => addValues(function() {}, 55)).toThrow(TypeError);
});

test('object + number = ERROR', () => {
    expect(() => addValues({}, 55)).toThrow(TypeError);
});

test('NaN + number = ERROR', () => {
    expect(() => addValues(NaN, 55)).toThrow(TypeError);
});

test('Infinity + number = ERROR', () => {
    expect(() => addValues(Number.POSITIVE_INFINITY, 55)).toThrow(TypeError);
});

test('Symbol + number = string', () => {
    expect(addValues(Symbol(100), 55)).toEqual("10055");
});

test('bigint + number = bigint', () => {
    expect(addValues(BigInt(100), 55)).toEqual(155n);
});

test('bigint + symbol = string', () => {
    expect(addValues(BigInt(100), Symbol(55))).toEqual("10055");
});