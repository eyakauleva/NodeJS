import { invertBoolean } from "../src/index";

test('boolean', () => {
    expect(invertBoolean(true)).toBe(false);
});

test('boolean', () => {
    expect(invertBoolean(false)).toBe(true);
});

test('number', () => {
    expect(() => invertBoolean(5)).toThrow(TypeError);
});

test('null', () => {
    expect(() => invertBoolean(null)).toThrow(TypeError);
});

test('undefined', () => {
    expect(() => invertBoolean(undefined)).toThrow(TypeError);
});

test('expression', () => {
    expect(invertBoolean(10 > -10)).toBe(false);
});