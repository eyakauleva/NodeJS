export function getArrayIntersection(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError("Bad params");
    }
    return array1.filter(value => array2.includes(value));
}

export function getArrayUnion(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError("Bad params");
    }
    return [...new Set(array1.concat(array2))];
}