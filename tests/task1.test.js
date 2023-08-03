import { calculateDiscountedPrice, calculateTotalPrice } from "../src/task1";

describe('calculateDiscountedPrice', () => {
    test('ok', () => {
        let given = [
            { name: "Book", price: 42.67 },
            { name: "Phone", price: 212.00 }
        ];
        let expected = [
            { name: "Book", price: 40.54 },
            { name: "Phone", price: 201.40 }
        ];
        let result = calculateDiscountedPrice(given, 5);
        expect(result).toEqual(expected);
        expect(given).toEqual([
            { name: "Book", price: 42.67 },
            { name: "Phone", price: 212.00 }
        ]);
    });

    test('validation', () => {
        let productsWithNoPrice = [
            { name: "Book", price1: 42.67 },
            { name: "Phone"}
        ];
        expect(() => calculateDiscountedPrice(productsWithNoPrice, 5)).toThrow(TypeError);
        expect(() => calculateDiscountedPrice([undefined, null, "product"], 5)).toThrow(TypeError);
        expect(() => calculateDiscountedPrice(null, 5)).toThrow(TypeError);
        expect(() => calculateDiscountedPrice([], NaN)).toThrow(TypeError);
    });
});

describe('calculateTotalPrice', () => {
    test('ok', () => {
        let given = [
            { name: "Book", price: 42.67 },
            { name: "Phone", price: 212.00 }
        ];
        let expected = 254.67;
        let result = calculateTotalPrice(given);
        expect(result).toEqual(expected);
        expect(given).toEqual([
            { name: "Book", price: 42.67 },
            { name: "Phone", price: 212.00 }
        ]);
    });
    
    test('validation', () => {
        let productsWithNoPrice = [
            { name: "Book", price1: 42.67 },
            { name: "Phone"}
        ];
        expect(() => calculateTotalPrice(productsWithNoPrice)).toThrow(TypeError);
        expect(() => calculateTotalPrice([undefined, null, "product"])).toThrow(TypeError);
        expect(() => calculateTotalPrice(null)).toThrow(TypeError);
    });
});