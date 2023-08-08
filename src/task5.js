export function observeObject(object, callback) {
    return new Proxy(object, callback);
}