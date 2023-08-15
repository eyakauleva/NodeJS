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

export function deepCloneWithoutRecursion(object) {
    let queue = [], result = {};
    Object.getOwnPropertyNames(object).forEach(property => {
        queue.push(property);
    });   
    while(queue.length > 0) {
        let propertyPath = queue.shift().split('.');
        let parentObject = initObject, i = 0;
        for (i = 0; i < propertyPath.length - 1; i++) {
            parentObject = parentObject[propertyPath[i]];
        }
        let value = Object.getOwnPropertyDescriptor(parentObject, propertyPath[i]).value;
        if (typeof value === "object" && value !== null && Object.keys(value).length !== 0) {
            if (Array.isArray(value)) {
                setValue(result, [], propertyPath);
            } else {
                setValue(result, {}, propertyPath);
            }
            Object.getOwnPropertyNames(value)
                    .filter(property => property !== 'length')
                    .forEach(property => {
                        let fullPath = propertyPath.join('.') + '.' + property;
                        queue.push(fullPath);
                    });
        } else {
            setValue(result, value, propertyPath);
        }
    }
    return result;
}

function setValue(obj, value, pathArray) {
    let schema = obj, i = 0;
    for (i = 0; i < pathArray.length - 1; i++) {
        if(schema[pathArray[i]] === undefined) {
            schema[pathArray[i]] = {};
        }
        schema = schema[pathArray[i]];
    }
    schema[pathArray[i]] = value;
}
