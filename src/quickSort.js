function sort(array, start, end) {
    if (!Array.isArray(array) || !Number.isInteger(start) || !Number.isInteger(end)) {
        throw new TypeError("Bad params");
    }
    if (start >= end) {
        return array;
    }
    let pivot = array[end], j = start - 1;
    for (let i = start; i <= end; i++) {
        if (array[i] < pivot || i === end) {
            j++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    sort(array, 0, j - 1);
    sort(array, j + 1, end);
    return array;
}