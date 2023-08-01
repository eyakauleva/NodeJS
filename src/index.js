function addValues(param1, param2) {

    // TODO
    if (param1 instanceof Array) {
        return param1.concat(param2);
    } else if (param2 instanceof Array) {
        return param2.concat(param1);
    } else if (typeof param1 === "string" || typeof param2 === "string") {
        return param1 + param2;
    } else if (typeof param1 === "boolean" || typeof param2 === "boolean") {
        return param1 && param2;
    }
    return validate(param1) + validate(param2);
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