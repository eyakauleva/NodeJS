export function debounce(func, timeout) {
    if (typeof func !== "function" || typeof timeout !== "number" || Number.isNaN(timeout)) {
        throw new TypeError("Bad params");
    }
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => { 
            func(args);
        }, timeout);
    }
}