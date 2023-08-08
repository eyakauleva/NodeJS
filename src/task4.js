export function createImmutableObject (object) {
    if (typeof object !== "object" || object === null) {
        throw new TypeError("Param must be an object");
    }
    let result;
    if (object instanceof Array) {
        result = [];
    } else {
        result = {};
    }
    Object.getOwnPropertyNames(object)
    .filter(property => property !== "length")
    .forEach(property => {
        let descriptor = Object.getOwnPropertyDescriptor(object, property);
        let newValue;
        if (typeof descriptor.value === "object" && descriptor.value !== null) {
            newValue = createImmutableObject(descriptor.value);
        } else {
            newValue = descriptor.value;
        }
        Object.defineProperty(result, property, {
            value: newValue,
            writable: false,
            enumerable: true,
            configurable: false
        });
    });
    return result;
}