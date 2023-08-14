export function curry(func, arity) {
    if (typeof func !== "function" || typeof arity !== "number" || Number.isNaN(arity)) {
        throw new TypeError("Bad params");
    }
    return function curried (...args) {
        if (arity !== args.length){
            return curried.bind(null, ...args)
        }
        return func(...args);
    };
}

