
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
    let numbers = [0, 1];
    return () => {
        let newNumber = numbers[0] + numbers[1];
        numbers[0] = numbers[1];
        numbers[1] = newNumber;
        return newNumber;
    };
}