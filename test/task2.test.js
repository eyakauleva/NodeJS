import { Product, getTotalPrice, deleteNonConfigurable } from "../src/task2";

describe('', () => {
    const product = new Product();

    test('properties are not writable', () => {
        expect(() => product.name = "new").toThrow();
        expect(() => product.price = "new").toThrow();
        expect(() => product.quantity = "new").toThrow();
    });

    test('properties are not enumerable', () => {
        expect(Object.keys(product)).toEqual([]);
    });

    test('getTotalPrice ok', () => {
        let product = new Product();
        expect(getTotalPrice(product)).toEqual(5000);
    });

    test('getTotalPrice validation', () => {
        expect(() => getTotalPrice({})).toThrow(TypeError);
    });

    test('deleteNonConfigurable ok', () => {
        let product = new Product();
        let property = "price";
        expect(Object.getOwnPropertyDescriptor(product, property)).not.toEqual(undefined);
        deleteNonConfigurable(product, property);
        expect(Object.getOwnPropertyDescriptor(product, property)).toEqual(undefined);
    });

    test('deleteNonConfigurable validation', () => {
        expect(() => deleteNonConfigurable({}, "")).toThrow(TypeError);
        expect(() => deleteNonConfigurable(new Product(), 123)).toThrow(TypeError);
        expect(() => deleteNonConfigurable(new Product(), "new property")).toThrow(TypeError);
    });

});