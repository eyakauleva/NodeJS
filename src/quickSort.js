function sort(array) {
    if (!Array.isArray(array) || array.length == 0) {
        throw new TypeError("Param must be a non-empty array");
    }
    let length = array.length;
    let pivot = array[length - 1], i = 0, j = -1;
    for (; i < length; i++) {
        if (array[i] < pivot || i === length - 1) {
            j++;
            let buf = array[j];
            array[j] = array[i];
            array[i] = buf;
        }
    }
    if (length > 2) { //TODO is ok?
        let a = [], b = [];
        if (j !== 0) {
            a = sort(array.slice(0, j));
        }
        if (j !== length - 1) {
            b = sort(array.slice(j + 1, length));
        }
        return a.concat(array[j]).concat(b);
    }
    else return array;
    
}

let arr = [8,5, -10,6,1,9,3,0,4, 2,8,7]; //TODO what if 1st el < ?
console.log(sort(arr));
// let b = [10,9];
// let c = [-1];
// console.log(arr.concat(b).concat(c))
    