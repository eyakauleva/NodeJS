export function chunkArray(array, chunkSize) {
    if (!(array instanceof Array) || typeof chunkSize !== "number" || chunkSize < 1) {
        throw new TypeError("Bad params");
    }
    let result = [];
    for(let i = 0; i < array.length; ) {
        let subArray = [];
        for (let j = 0; j < chunkSize; j++, i++) {
            if(typeof array[i] !== "undefined") {
                subArray.push(array[i]);
            }
        }
        result.push(subArray);
    }
    return result;
}