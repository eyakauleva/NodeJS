export function measureArrayPerformance(func, array) {
    if (typeof func !== "function" || !Array.isArray(array)) {
        throw new TypeError("Bad params");
    }
    const start = performance.now();
    func(array);
    const end = performance.now();
    return end - start;
}

function comparePerformances() {
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
    const customMapTime = measureArrayPerformance(customMap, array);
    const jsMapTime = measureArrayPerformance(jsMap, array);
    if (customMapTime > jsMapTime) {
        console.log(`Custom map [time=${customMapTime}] is slower than JS map [time=${jsMapTime}]`);
    } else if (customMapTime < jsMapTime) {
        console.log(`Custom map [time=${customMapTime}] is faster than JS map [time=${jsMapTime}]`);
    } else {
        console.log(`Custom map equals JS map [time=${jsMapTime}]`);
    }
}