export function validateObject(object, schema) {
    return !Object
        .keys(schema)
        .some(key => typeof object[key] === "undefined" || !schema[key](object[key]));
}