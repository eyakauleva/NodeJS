function sort(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Param must be an array");
    }
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[i] > array[j]) {
                let buf = array[i];
                array[i] = array[j];
                array[j] = buf;
            }
        }
    }
}