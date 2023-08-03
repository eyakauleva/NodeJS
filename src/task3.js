import { isNumberValid } from "../src/common";

export function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    } 
}

export function repeatFunction(callback, times, stopCondition = () => false) {
    if(typeof callback !== "function" || !isNumberValid(times)) {
        throw new TypeError("Function and valid number must be provided");
    }
    return function() {
        for(let i = 0; i < times || times < 0; i++) {
            if (stopCondition()) {
                break;
            }
            callback();
        }
    }
}