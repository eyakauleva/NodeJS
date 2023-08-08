export function deepCloneObject(object) {
    if (typeof object !== "object" || object === null) {
        throw new TypeError("Param must be an object");
    }
    let result;
    if (object instanceof Array) {
        result = [];
    } else {
        result = {};
    }
    Object.getOwnPropertyNames(object).forEach(property => {
        let descriptor = Object.getOwnPropertyDescriptor(object, property);
        let newValue;
        if (typeof descriptor.value === "object" && descriptor.value !== null) {
            newValue = deepCloneObject(descriptor.value);
        } else {
            newValue = descriptor.value;
        }
        result[property] = newValue;
    });
    return result;
}