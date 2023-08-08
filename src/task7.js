export function validateObject(object, schema) {
    return Object
        .keys(schema)
        .filter(key => typeof object[key] === "undefined" || !schema[key](object[key]))
        .length <= 0;
}