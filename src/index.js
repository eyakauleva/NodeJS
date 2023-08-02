
// Task 1. Immutability and Pure Functions

export function calculateDiscountedPrice(products, discount) {
    if(!(products instanceof Array)) {
        throw new TypeError("Products must be an array");
    }
    if(typeof discount !== "number" || Number.isNaN(discount)
            || discount === Number.POSITIVE_INFINITY || discount === Number.NEGATIVE_INFINITY) {
        throw new TypeError("Discount must be a number");
    }
    let productsWithDiscounts = [];
    products.forEach(product => {
        if (!product.hasOwnProperty('price')) {
            throw new TypeError("Each product must contain price");
        }
        productsWithDiscounts.push({
            name: product.name,
            price: Number((product.price - product.price * discount / 100).toFixed(2))
        })
    });
    return productsWithDiscounts;
}

export function calculateTotalPrice(products) {
    if(!(products instanceof Array)) {
        throw new TypeError("Products must be an array");
    }
    let totalPrice = 0;
    products.forEach(product => {
        if (!product.hasOwnProperty('price')) {
            throw new TypeError("Each product must contain price");
        }
        totalPrice += product.price;
    });
    return Number(totalPrice.toFixed(2));
}


// Task 2: Function Composition and Point-Free Style

export function getFullName(person) {
    if (!person.hasOwnProperty('firstName') || !person.hasOwnProperty('lastName')) {
        throw new TypeError("Person must have firstName and lastName");
    }
    return person.firstName + " " + person.lastName;
}

export function filterUniqueWords(text) {
    if(typeof text !== "string") {
        throw new TypeError("Test must be a string");
    }
    return text.toLowerCase()
        .split(" ")
        .filter((value, index, array) => array.indexOf(value) === index)
        .sort();
}