export function throttle(func, timeout) {
    if (typeof func !== "function" || typeof timeout !== "number" || Number.isNaN(timeout)) {
        throw new TypeError("Bad params");
    }
    let timer;
    return function (...args) {
        if (timer) {
            return;
        }
        timer = setTimeout(() => { 
            func(args);
            timer = null;
        }, timeout);
    }
}