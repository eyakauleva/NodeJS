import { deepCloneObject } from "../src/task6";

describe('task 6', () => {

    test('deepCloneObject ok [1]', () => {
        const initObject = {
            a: "Liza",
            b: [1,2,3],
            c: {
                one: "laalla",
                two: {
                    smth: "...."
                },
                three: [
                    {}
                ]
            }
        };
        const deepClonedObj = deepCloneObject(initObject);
        initObject.a = "me";
        expect(deepClonedObj.a).toEqual("Liza");
        initObject.c.three[1] = 2
        expect(deepClonedObj.c.three[1]).toEqual(undefined);
        deepClonedObj.b = {};
        expect(initObject.b).toEqual([1,2,3]);
    });

    test('deepCloneObject ok [2]', () => {
        const initObject = ["Liza", [1,2,3], {one: "lallala"}];
        const deepClonedObj = deepCloneObject(initObject);
        initObject[0] = "me";
        expect(deepClonedObj[0]).toEqual("Liza");
        deepClonedObj[1][2] = {};
        expect(initObject[1]).toEqual([1,2,3]);
        deepClonedObj[1] = {};
        expect(initObject[1]).toEqual([1,2,3]);
    });

    test('deepCloneObject validation', () => {
        const initObject = undefined;
        expect(() => deepCloneObject(initObject)).toThrow();
    });

});