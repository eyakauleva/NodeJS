export function createImmutableObject (object) {
    if (typeof object !== "object" || object === null) {
        throw new TypeError("Param must be an object");
    }
    const result = {};
    Object.getOwnPropertyNames(object).forEach(property => {
        let descriptor = Object.getOwnPropertyDescriptor(object, property);
        let newValue;
        if (descriptor.value instanceof Array) {
            newValue = processArray(descriptor.value);
        } else if (typeof descriptor.value === "object" && descriptor.value !== null) {
            newValue = createImmutableObject(descriptor.value);
        } else {
            newValue = descriptor.value;
        }
        Object.defineProperty(result, property, {
            value: newValue,
            writable: false,
            enumerable: true
        });
    });
    return result;
}

function processArray(array) {
    let result = [];
    array.filter(value => value !== "length").forEach(value => {
        if (value instanceof Array) {
            let innerArray = processArray(value);
            Object.freeze(innerArray);
            result.push(innerArray);
        } else if (typeof value !== "object" || value === null) {
            result.push(value);
        } else {
            result.push(createImmutableObject(value));
        }
    });
    Object.freeze(result);
    return result;
}