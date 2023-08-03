export const addValues = function (param1, param2) {
    param1 = validate(param1);
    param2 = validate(param2);
    if (param1 instanceof Array && param2 instanceof Array) {
        return param1.concat(param2);
    } else if (typeof param1 === "boolean" && typeof param2 === "boolean") {
        return param1 || param2;
    } else if (typeof param1 === "string") {
        if (typeof param2 !== "bigint" && typeof param2 !== "number" && typeof param2 !== "string") {
            throw new TypeError("String can be concatenated only with string or number");
        } else {
            return param1 + param2;
        }
    } else if (typeof param2 === "string") {
        if (typeof param1 !== "bigint" && typeof param1 !== "number" && typeof param1 !== "string") {
            throw new TypeError("String can be concatenated only with string or number");
        } else {
            return param1 + param2;
        }
    } else if (typeof param1 === "bigint") {
        if (typeof param2 === "number") {
            return param1 + BigInt(param2);
        }
    } else if (typeof param2 === "bigint") {
        if (typeof param1 === "number") {
            return param2 + BigInt(param1);
        }
    } else if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    } else {
        throw new TypeError("Bad params types");
    }
}

export const stringifyValue = function (param) {
    if (typeof param === "symbol") {
        return param.description;
    } else if (param === null) {
        return String(param);
    } else if (param === undefined) {
        throw new TypeError("Param cannot be undefined");
    } else if (typeof param === "object") {
        return JSON.stringify(param)
    } else {
        return param.toString();
    }
}

export const invertBoolean = function (param) {
    if (typeof param !== "boolean") {
        throw new TypeError("Param must be boolean");
    } else {
        return !param;
    }
}

export const convertToNumber = function (param) {
    param = validate(param);
    if (typeof param === "string") {
        let buf = parseFloat(param);
        if (Number.isNaN(buf)) {
            throw new TypeError("Param must be a number");
        } else {
            return buf;
        }
    } else if (typeof param === "boolean" || typeof param === "bigint") {
        return Number(param);
    } else {
        return param;
    }
}

export const coerceToType = function (value, type) {
    type = type.trim().toLowerCase();
    let incoercibleTypes = ["nan", "infinity", "function", "null", "undefined", "object"]
    if (incoercibleTypes.indexOf(type) > -1) {
        throw new TypeError("Unable to coerce to the provided type");
    }
    if (Number.isNaN(value) || value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
        throw new TypeError("Unable to coerce provided value");
    }
    incoercibleTypes.forEach(incoercibleType => {
        if (typeof value === incoercibleType) {
            if (!(value instanceof Array)) {
                throw new TypeError("Unable to coerce provided value");
            }
        }
    })
    if (type === "string") {
        return stringifyValue(value);
    } else if (type === "number") {
        return convertToNumber(value);
    } else if (type === "boolean") {
        if (typeof value === "string") {
            return value.length > 0;
        } else if (typeof value === "number") {
            return value !== 0;
        } else if (typeof value === "boolean") {
            return value;
        } else if (typeof value === "bigint") {
            return value !== BigInt(0);
        } else if (typeof value === "symbol") {
            return value.description !== undefined;
        } else if (value instanceof Array) {
            return value.length > 0;
        }
    } else if (type === "bigint") {
        return BigInt(value);
    } else if (type === "symbol") {
        return Symbol(value);
    } else if (type === "array") {
        return [ value ];
    }
}

function validate(param) {
    if (typeof param === "undefined") {
        throw new TypeError("Param cannot be undefined");
    } else if (typeof param === "function") {
        throw new TypeError("Param cannot be function");
    } else if (typeof param === "object") {
        throw new TypeError("Param cannot be object");
    } else if (Number.isNaN(param)) {
        throw new TypeError("Param cannot be NaN");
    } else if (param === Number.POSITIVE_INFINITY || param === Number.NEGATIVE_INFINITY) {
        throw new TypeError("Param cannot be Infinity");
    } else if (typeof param === "symbol") {
        return param.description;
    } else {
        return param;
    }
}