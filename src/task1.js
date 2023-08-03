import { isNumberValid } from "../src/common";

export function calculateDiscountedPrice(products, discount) {
    if(!(products instanceof Array)) {
        throw new TypeError("Products must be an array");
    }
    if(!isNumberValid(discount)) {
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