export function isNumberValid(number) {
    return typeof number === "number" 
            && !Number.isNaN(number) 
            && number !== Number.POSITIVE_INFINITY 
            && number !== Number.NEGATIVE_INFINITY;
}