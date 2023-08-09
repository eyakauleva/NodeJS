export function customShuffle(array) {
    if (!(array instanceof Array)) {
        throw new TypeError("Bad params");
    }
    let length = array.length;
    let result = [length], i;
    while (length) {
      i = Math.floor(Math.random() * length--);
      result[length] = array[i];
      result[i] = array[length];
    }
    return result;
  }