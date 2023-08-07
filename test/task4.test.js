import { createImmutableObject } from "../src/task4";
import { Person } from "../src/task1";

describe('task 4', () => {

    test('createImmutableObject function to create an immutable version of the person object from Task 1.', () => {
        const person = new Person();
        const immutablePerson = createImmutableObject(person);
        expect(() => immutablePerson.firstName = "new").toThrow();
        expect(() => immutablePerson.lastName = "new").toThrow();
        expect(() => immutablePerson.age = 21).toThrow();
        expect(() => immutablePerson.email = "new").toThrow();
        expect(() => immutablePerson.address = "new").toThrow();
        
        expect(immutablePerson.firstName).toEqual("John");
        expect(immutablePerson.lastName).toEqual("Doe");
        expect(immutablePerson.age).toEqual(30);
        expect(immutablePerson.email).toEqual("john.doe@example.com");
        expect(immutablePerson.address).toEqual({});
    });

    test('createImmutableObject validation', () => {
        expect(() => createImmutableObject("")).toThrow(TypeError);
    });

});