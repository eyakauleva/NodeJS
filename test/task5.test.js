import { observeObject } from "../src/task5";
import { Person } from "../src/task1";

describe('task 5', () => {

    test('observeObject ok', () => {
        const person = new Person();
        const handler = {
            get: (target, key) => {
                console.log("get: " + key);
                return Reflect.get(target, key);
            },
            set: (target, key, value) => {
                console.log("set: " + key);
                return Reflect.set(target, key, value);
            }
        };
        const proxyObject = observeObject(person, handler);
        expect(() => proxyObject.firstName).not.toThrow();
        expect(proxyObject.firstName).toEqual("John");
        expect(() => proxyObject.firstName = "Me").toThrow();
    });

});