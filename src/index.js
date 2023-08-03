
// Task 1. Immutability and Pure Functions

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

export function getAverageGrade(students) {
    if(!(students instanceof Array)) {
        throw new TypeError("Students must be an array");
    }
    let gradesSum = 0, gradesCount = 0;
    students.forEach(student => {
        if (!student.hasOwnProperty('name') || !student.hasOwnProperty('grades') 
                || !(student.grades instanceof Array)) {
            throw new TypeError("Each student must contain name and grades");
        }
        gradesSum += student.grades.reduce((a, b) => a + b, 0);
        gradesCount += student.grades.length;
    });
    return Number((gradesSum / gradesCount).toFixed(1));
}


// Task 3: Closures and Higher-Order Functions

export function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    } 
}

export function repeatFunction(callback, times, stopCondition = () => false) {
    if(typeof callback !== "function" || !isNumberValid(times)) {
        throw new TypeError("Function and valid number must be provided");
    }
    return function() {
        for(let i = 0; i < times || times < 0; i++) {
            if (stopCondition()) {
                break;
            }
            callback();
        }
    }
}


// Task 4: Recursion and Tail Call Optimization

export function calculateFactorial(number, prevResult = 1) {
    if (!isNumberValid(number) || number < 0) {
        throw new TypeError("Value must be a positive number");
    }
    if(number === 1) {
        return BigInt(number) * BigInt(prevResult);
    } else {
        let newResult = BigInt(number) * BigInt(prevResult);
        return calculateFactorial(number - 1, newResult);
    }
}

function isNumberValid(number) {
    if (typeof number !== "number" || Number.isNaN(number) 
            || number === Number.POSITIVE_INFINITY || number === Number.NEGATIVE_INFINITY) {
        return false;
    }
    return true;
}