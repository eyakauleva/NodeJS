
export function lazyMap(arrayArg, mappingFuncArg) {
    let array = arrayArg(), mappingFunc = mappingFuncArg();
    if (!(array instanceof Array)) {
        throw new TypeError("1st param must be an array")
    }
    if (typeof mappingFunc !== "function") {
        throw new TypeError("2nd param must be a mapping function")
    }
    let index = 0;
    return () => {
        if (index < array.length) {
            return mappingFunc(array[index++]);
        }
    };
}

export function fibonacciGenerator() {
    let numbers = [0, 1], index = 2;
    return () => {
        let newNumber = numbers[index - 2] + numbers[index - 1];
        numbers.push(newNumber);
        return numbers[index++]
    };
}