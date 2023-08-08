export function customFilterUnique(array, callback) {
    if (!(array instanceof Array) || typeof callback !== "function") {
        throw new TypeError("Bad params");
    }
    return array.filter(callback);
}