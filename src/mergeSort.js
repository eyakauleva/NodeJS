function sort(array, start, end) {
    if (!Array.isArray(array) || !Number.isInteger(start) || !Number.isInteger(end)) {
        throw new TypeError("Bad params");
    }
    if (end - start <= 1) {
        if (array[start] > array[end]) {
            [array[start], array[end]] = [array[end], array[start]];
        }
        return array.slice(start, end + 1);
    } else {
        let middleIdx = start + Math.floor((end - start) / 2);
        let left = sort(array, start, middleIdx);
        let right = sort(array, middleIdx + 1, end);
        let result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] > right[0]) {
                result.push(right[0]);
                right.shift();
            } else {
                result.push(left[0]);
                left.shift();
            }
        }
        while (left.length > 0) {
            result.push(left[0]);
            left.shift();
        }
        while (right.length > 0) {
            result.push(right[0]);
            right.shift();
        }
        return result;
    }
}