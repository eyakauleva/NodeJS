export function customFilterUnique(array, callback) {
    if (!(array instanceof Array) || typeof callback !== "function") {
        throw new TypeError("Bad params");
    }
    const filteredArray = array.filter(callback);
    return [...new Set(filteredArray)];
}