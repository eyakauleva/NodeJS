export function deepCloneObject(object) {
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
            newValue = deepCloneObject(descriptor.value);
        } else {
            newValue = descriptor.value;
        }
        result[property] = newValue;
    });
    return result;
}

function processArray(array) {
    let result = [];
    array.filter(value => value !== "length").forEach(value => {
        if (value instanceof Array) {
            let innerArray = processArray(value);
            result.push(innerArray);
        } else if (typeof value !== "object" || value === null) {
            result.push(value);
        } else {
            result.push(deepCloneObject(value));
        }
    });
    return result;
}