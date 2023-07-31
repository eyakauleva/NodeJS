String.prototype.plus = function (param) {
    let smallerTerm, biggerTerm;
    if (this.isGreaterOrEquals(param)) {
        smallerTerm = param.split("").reverse().join("");
        biggerTerm = this.split("").reverse().join("");
    } else {
        smallerTerm = this.split("").reverse().join("");
        biggerTerm = param.split("").reverse().join("");
    }
    let result = "", carry = 0;
    for (let i = 0; i < smallerTerm.length; i++) {
        let sum = (smallerTerm[i] -  '0') + (biggerTerm[i] -  '0') + carry;
        result += sum % 10;
        carry = sum / 10 | 0;
    }
    for (let i = smallerTerm.length; i < biggerTerm.length; i++) {
        let sum = (biggerTerm[i] -  '0') + carry;
        result += sum % 10;
        carry = sum / 10 | 0;
    }
    if (carry > 0) {
        result += carry;
    }
    return result.split("").reverse().join("");
}

String.prototype.minus = function (param) {
    let subtrahend, minuend, isResultNegative;
    if (this.isGreaterOrEquals(param)) {
        subtrahend = param.split("").reverse().join("");
        minuend = this.split("").reverse().join("");
        isResultNegative = false;
    } else {
        subtrahend = this.split("").reverse().join("");
        minuend = param.split("").reverse().join("");
        isResultNegative = true;
    }
    let result = "", carry = 0;
    for (let i = 0; i < minuend.length; i++) {
        let diff = 0;
        if (i < subtrahend.length) {
            diff = (minuend[i] -  '0') - (subtrahend[i] -  '0') - carry;
        } else {
            diff = (minuend[i] -  '0') - carry;
        }
        if (diff < 0) {
            carry = 1;
            diff += 10;
        } else {
            carry = 0;
        }
        result += diff;
    }
    let appender = "";
    if (isResultNegative) {
        appender = "-";
    }
    let leadingZerosRegex = new RegExp("^0+(?!$)");
    return appender + result.split("").reverse().join("").replace(leadingZerosRegex, '');
}

String.prototype.multiply = function (param) {
    let multiplier, multiplicanda;
    let endZerosRegex = new RegExp("0+(?=\.|$)/");
    let zerosInTheEndCount = (this.match(endZerosRegex) || [''])[0].length 
                                + (param.match(endZerosRegex) || [''])[0].length;
    if (this.isGreaterOrEquals(param)) {
        multiplier = param.replace(endZerosRegex, '').split("").reverse().join("");
        multiplicanda = this.replace(endZerosRegex, '').split("").reverse().join("");
    } else {
        multiplier = this.replace(endZerosRegex, '').split("").reverse().join("");
        multiplicanda = param.replace(endZerosRegex, '').split("").reverse().join("");
    }
    let result = "";
    for (let i = 0; i < multiplier.length; i++) {
        let reversedTerm = "", carry = 0;
        for (let j = 0; j < multiplicanda.length; j++) {
            let mult = (multiplier[i] -  '0') * (multiplicanda[j] -  '0');
            reversedTerm += (mult + carry) % 10 ;
            carry = ((mult + carry) / 10 | 0)
        }
        if (carry > 0) {
            reversedTerm += carry;
        }
        let term = reversedTerm.split("").reverse().join("") + "0".repeat(i);
        result = result.plus(term)
    }
    return result + "0".repeat(zerosInTheEndCount);
}

String.prototype.divide = function (param) {
    if (this === "0" || param === "0") {
        throw new Error("Bad arguments: can't divide by zero")
    }
    let divisor, dividend;
    if (this.isGreaterOrEquals(param)) {
        divisor = param;
        dividend = this;
    } else {
        divisor = this;
        dividend = param;
    }
    let result = "", carry = 0;
    for (let i = 0; i < dividend.length; i++) {
        let buf = carry * 10 + (dividend[i] -  '0');
        result += buf / divisor | 0;
        carry = buf % divisor;
    }
    let leadingZerosRegex = new RegExp("^0+(?!$)");
    return result.replace(leadingZerosRegex, '');
}

String.prototype.isGreaterOrEquals = function (param) {
    if (this.length > param.length) {
        return true;
    } else if (this.length < param.length) {
        return false;
    } else {
        for (let i = 0; i < param.length; i++) {
            if (this[i] > param[i]) {
                return true;
            } else if (this[i] < param[i]) {
                return false;
            } 
            if (i === param.length - 1) {
                return true;
            }
        }
    }
}