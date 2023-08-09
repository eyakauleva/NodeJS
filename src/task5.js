export function measureArrayPerformance(func, array) {
    if (typeof func !== "function" || !Array.isArray(array)) {
        throw new TypeError("Bad params");
    }
    const start = performance.now();
    func(array);
    const end = performance.now();
    return end - start;
}

function comparePerformances(array, customFunc, jsFunc) {
    if (!Array.isArray(array) || typeof customFunc !== "function" || typeof jsFunc !== "function") {
        throw new TypeError("Bad params");
    }
    const customMapTime = measureArrayPerformance(customFunc, array);
    const jsMapTime = measureArrayPerformance(jsFunc, array);
    if (customMapTime > jsMapTime) {
        console.log(`Custom map [time=${customMapTime}] is slower than JS map [time=${jsMapTime}]`);
    } else if (customMapTime < jsMapTime) {
        console.log(`Custom map [time=${customMapTime}] is faster than JS map [time=${jsMapTime}]`);
    } else {
        console.log(`Custom map equals JS map [time=${jsMapTime}]`);
    }
}

function compareMap() {
    const array = [1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15];
    const customMap = (array) => {
        let resultArr = [array.length];
        for (const value of array) {
            resultArr.push(value);
        }
        return resultArr;
    };
    const jsMap = (array) => {
        return array.map(item => item * 2);
    };
    comparePerformances(array, customMap, jsMap);
}

function compareFilter() {
    const array = [1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15];
    const customFilter = (array) => {
        let resultArr = [];
        for (const value of array) {
            if (value % 2 === 0) {
                resultArr.push(value);
            }
        }
        return resultArr;
    };
    const jsFilter = (array) => {
        return array.filter(item => item % 2 === 0);
    };
    comparePerformances(array, customFilter, jsFilter);
}