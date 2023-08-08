export function chunkArray(array, chunkSize) {
    if (!(array instanceof Array) || typeof chunkSize !== "number" || chunkSize < 1) {
        throw new TypeError("Bad params");
    }
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}