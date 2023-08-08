import { validateObject } from "../src/task7";

describe('task 7', () => {
    const schema = {
        firstName: value => typeof value === "string" && /^[a-zA-Z]+$/.test(value),
        lastName: value => typeof value === "string" && /^[a-zA-Z]+$/.test(value),
        age: value => typeof value === "number" && !Number.isNaN(value) && value > 0,
        email: value => typeof value === "string" && value.length > 0 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
    };

    test('validateObject ok [valid]', () => {
        let object = {
            firstName: "John",
            lastName: "Doe",
            age: 35,
            email: "john@gmail.com"
        };
        expect(validateObject(object, schema)).toEqual(true);
    });

    test('validateObject ok [valid]', () => {
        let object = {
            firstName: "John",
            lastName: "Doe",
            email: 888888
        };
        expect(validateObject(object, schema)).toEqual(false);
    });

});