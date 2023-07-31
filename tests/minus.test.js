require("../src/index")

test('3001 - 17 = 2984', () => {
    expect("3001".minus("17")).toBe("2984");
});

test('9999 - 1111 = 8888', () => {
    expect("9999".minus("1111")).toBe("8888");
});

test('9999 - 9999 = 0', () => {
    expect("9999".minus("9999")).toBe("0");
});

test('1111 - 99 = 1012', () => {
    expect("1111".minus("99")).toBe("1012");
});

test('1111 - 2220 = -1109', () => {
    expect("1111".minus("2220")).toBe("-1109");
});

test('10000000000000000 - 5555 = 9999999999994445', () => {
    expect("10000000000000000".minus("5555")).toBe("9999999999994445");
});