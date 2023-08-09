export function observeObject(object, callback) {
  return new WrappedObject(object, callback);
}

function WrappedObject(object, handler) {
  Object.getOwnPropertyNames(object).forEach(property => {
    Object.defineProperty(this, property, {
        get: () => {
          return handler.get(object, property);
        },
        set: (value) => {
          return handler.set(object, property, value);
        }
    });
  });
}