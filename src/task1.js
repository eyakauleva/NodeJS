export function Person() {

    this.firstName = "John";
    this.lastName = "Doe";
    this.age = 30;
    this.email = "john.doe@example.com";
    this.address = {};

    Object.defineProperties(this, {
        firstName: {
            writable: false
        },
        lastName: {
            writable: false,
        },
        age: {
            writable: false,
        },
        email: {
            writable: false,
        },
        address: {
            enumerable: false,
            configurable: false
        }
    });

    this.updateInfo = (updatedFields) => {
        if (typeof updatedFields === "object" && updatedFields !== null) {
            Object.getOwnPropertyNames(this).forEach(property => {
                if (Object.getOwnPropertyDescriptor(this, property).writable
                        && typeof updatedFields[property] !== "undefined") {
                    this[property] = updatedFields[property];
                } 
            });
        }
    }
}