import { Person } from "../src/task1";

describe('task 1', () => {
    const person = new Person();

    test('properties are not writable', () => {
        expect(() => person.firstName = "new").toThrow();
        expect(() => person.lastName = "new").toThrow();
        expect(() => person.age = "new").toThrow();
        expect(() => person.email = "new").toThrow();
    });

    test('updateInfo not throws & adheres to the read-only descriptor', () => {
        expect(() => person.updateInfo({firstName: "name", address: "addr"})).not.toThrow();
        expect(person.firstName).not.toEqual("name");
        expect(person.address).toEqual("addr");
    });

    test('address property is non-enumerable and non-configurable', () => {
        let property = "address";
        for (const key in person){
            expect(key).not.toEqual(property);
        }
        expect(() => delete person[key]).toThrow();
    });

});