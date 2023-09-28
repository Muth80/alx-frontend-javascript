import Currency from './3-currency.js';

class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    // getters
    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }

    // setters
    set amount(newAmount) {
        this._amount = newAmount;
    }

    set currency(newCurrency) {
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency._name} (${this._currency._code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}

export default Pricing;
