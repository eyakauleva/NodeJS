export function curry(func, arity) {
    if (typeof func !== "function" || typeof arity !== "number" || Number.isNaN(arity)) {
        throw new TypeError("Bad params");
    }
    let counter = 1;
    return function curried(...args) {
        if (args.length != counter++) {
            throw new Error("Pass args one by one")
        }
        if (arity !== args.length){
            return curried.bind(null, ...args)
        }
        return func(...args);
    };
}

export function partial(func, arity) {
    if (typeof func !== "function" || typeof arity !== "number" || Number.isNaN(arity)) {
        throw new TypeError("Bad params");
    }
    return function curried(...args) {
        args = args.filter(arg => !(/^_$/.test(arg)))
        if (arity !== args.length){
            return curried.bind(null, ...args)
        }
        return func(...args);
    };
}

