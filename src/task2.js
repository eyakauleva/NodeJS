export function Product() {

    this.name = "Laptop";
    this.price = 1000;
    this.quantity = 5;

    Object.defineProperties(this, {
        name: {
            writable: false,
            enumerable: false
        },
        price: {
            writable: false,
            enumerable: false
        },
        quantity: {
            writable: false,
            enumerable: false
        }
    });
}

export function getTotalPrice(product) {
    if (product instanceof Product) {
        let price = Object.getOwnPropertyDescriptor(product, 'price').value;
        let quantity = Object.getOwnPropertyDescriptor(product, 'quantity').value;
        return price * quantity;
    } else {
        throw new TypeError("Bad params");
    }
}

export function deleteNonConfigurable(product, property) {
    if (!(product instanceof Product) || typeof property !== "string") {
        throw new TypeError("Bad params");
    }
    let propertyDescriptor = Object.getOwnPropertyDescriptor(product, property);
    if (typeof propertyDescriptor !== "undefined" && propertyDescriptor.configurable) {
        delete product[property];
    } else {
        throw new TypeError("Property must exist and be configurable");
    }
}