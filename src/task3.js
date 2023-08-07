export function BankAccount() {

    this._balance = 100;
    this._currencySymbol = "$";

    Object.defineProperties(this, {
        balance: {
            set: function (value) {
                value = value.toString();
                let balanceValue = value.match(/([-0-9.]+)$/);
                let currencyMatches = value.match(/^[^\d\s-]+/);
                if (balanceValue && currencyMatches) {
                    this._balance = parseFloat(balanceValue[0]).toFixed(2);;
                    this._currencySymbol = currencyMatches[0];
                } else {
                    throw new TypeError ("Value must have currency symbol and value")
                }
            },
            get: function() {
                return this._balance;
            }
        },
        formattedBalance: {
            get: function () {
                return this._currencySymbol + this._balance;
            }
        }
    });

    this.transfer = (target, amount) => {
        amount = amount.toString();
        let amountValue = amount.match(/([0-9.]+)$/);
        let amountCurrency = amount.match(/^[^\d\s]+/);
        if (!amountValue || !amountCurrency) {
            throw new TypeError("Value must have currency symbol and value");
        }
        let currentBalanceDiff = convertCurrency(
            this._currencySymbol, amountCurrency[0], parseFloat(amountValue)
        );
        if (currentBalanceDiff > this._balance) {
            throw new Error("Not enough money on the balance");
        } else {
            this.balance = this._currencySymbol + (this._balance - currentBalanceDiff.toFixed(2));
        }
        let targetBalanceDiff = convertCurrency(
            target._currencySymbol, amountCurrency[0], parseFloat(amountValue)
        );
        target.balance = target._currencySymbol + (target._balance + Number(targetBalanceDiff.toFixed(2)));
    };

}

const exchangeRates = {
    "$": 1,
    "€": 0.85,
    "£": 0.72,
    "¥": 110,
};

function convertCurrency(currentCurrency, targetCurrency, amount) {
    if (!exchangeRates[currentCurrency] || !exchangeRates[targetCurrency]) {
        throw new Error('Invalid currency');
    }
    if (currentCurrency === targetCurrency) {
        return amount;
    }
    return amount * (exchangeRates[targetCurrency] / exchangeRates[currentCurrency]);
}