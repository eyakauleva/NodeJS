function addValues(param1, param2) {

    // TODO
    if (param1 instanceof Array) {
        return param1.concat(param2);
    } else if (param2 instanceof Array) {
        return param2.concat(param1);
    }

    param1 = validate(param1);
    param2 = validate(param2);
    if (typeof param1 === "string" || typeof param2 === "string") {
        return param1 + param2;
    }
    if (typeof param1 === "boolean" || typeof param2 === "boolean") {
        return param1 && param2;
    }
    
    return param1 + param2;
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

function stringifyValue(param) {
    if (typeof param === "symbol") {
        return param.description;
    } else if (param === null || param === undefined) {
        return String(param);
    } else if (typeof param === "object") {
        return JSON.stringify(param)
    } else {
        return param.toString();
    }
}

function invertBoolean(param) {
    if (typeof param !== "boolean") {
        throw new TypeError("Param must be boolean");
    } else {
        return !param;
    }
}

function convertToNumber(param) {
    param = validate(param);
    if (typeof param === "string") {
        let buf = parseFloat(param);
        if (Number.isNaN(buf)) {
            throw new TypeError("Param must be a number");
        } else {
            return buf;
        }
    } else if (typeof param === "boolean") {
        return Number(param);
    } else {
        return param;
    }
}




try {
    // console.log(addValues(5, [5,7]))
    // console.log(stringifyValue(function() {return 1;}))
    // let a = true;
    // console.log(invertBoolean(null))
    let a = true
    console.log(convertToNumber(a))
} catch (error) {
    console.log(error.message)
}