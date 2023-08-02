import { coerceToType } from "../src/index";

test('number -> string', () => {
    expect(coerceToType(100, " sTrIng    ")).toEqual("100");
});

test('number -> NaN', () => {
    expect(() => coerceToType(100, "Nan")).toThrow(TypeError);
});

test('number -> Infinity', () => {
    expect(() => coerceToType(100, "Infinity")).toThrow(TypeError);
});

test('number -> function', () => {
    expect(() => coerceToType(100, "function")).toThrow(TypeError);
});

test('number -> null', () => {
    expect(() => coerceToType(100, "null")).toThrow(TypeError);
});

test('number -> undefined', () => {
    expect(() => coerceToType(100, "undefined")).toThrow(TypeError);
});

test('number -> object', () => {
    expect(() => coerceToType(100, "object")).toThrow(TypeError);
});

test('Nan -> string', () => {
    expect(() => coerceToType(NaN, "string")).toThrow(TypeError);
});

test('Infinity -> string', () => {
    expect(() => coerceToType(Number.POSITIVE_INFINITY, "string")).toThrow(TypeError);
});

test('function -> string', () => {
    expect(() => coerceToType(function() {}, "string")).toThrow(TypeError);
});

test('null -> string', () => {
    expect(() => coerceToType(null, "string")).toThrow(TypeError);
});

test('undefined -> string', () => {
    expect(() => coerceToType(undefined, "string")).toThrow(TypeError);
});

test('object -> string', () => {
    expect(() => coerceToType({}, "string")).toThrow(TypeError);
});

test('bigint -> string', () => {
    expect(coerceToType(123n, "string")).toEqual("123");
});

test('string -> number', () => {
    expect(coerceToType("123", "number")).toEqual(123);
});

test('string -> boolean', () => {
    expect(coerceToType("123", "boolean")).toEqual(true);
});

test('string -> boolean', () => {
    expect(coerceToType("", "boolean")).toEqual(false);
});

test('number -> boolean', () => {
    expect(coerceToType(24.66, "boolean")).toEqual(true);
});

test('number -> boolean', () => {
    expect(coerceToType(0.00, "boolean")).toEqual(false);
});

test('bigint -> boolean', () => {
    expect(coerceToType(123n, "boolean")).toEqual(true);
});

test('bigint -> boolean', () => {
    expect(coerceToType(0n, "boolean")).toEqual(false);
});

test('symbol -> boolean', () => {
    expect(coerceToType(Symbol(), "boolean")).toEqual(false);
});

test('symbol -> boolean', () => {
    expect(coerceToType(Symbol(34), "boolean")).toEqual(true);
});

test('array -> boolean', () => {
    expect(coerceToType([2], "boolean")).toEqual(true);
});

test('array -> boolean', () => {
    expect(coerceToType([], "boolean")).toEqual(false);
});

test('string -> bigint', () => {
    expect(() => coerceToType("zz123zzz", "bigint")).toThrow();
});

test('string -> bigint', () => {
    expect(coerceToType("123", "bigint")).toEqual(123n);
});

test('boolean -> bigint', () => {
    expect(coerceToType(false, "bigint")).toEqual(BigInt(0n));
});


test('boolean -> symbol', () => {
    expect(coerceToType(true, "symbol").toString()).toEqual(Symbol(true).toString());
});

test('string -> array', () => {
    expect(coerceToType("123", "array")).toEqual(["123"]);
});