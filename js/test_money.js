const assert = require('assert')


class Money {
    constructor(amount, currency) {
        this.amount = amount
        this.currency = currency
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }

    divide(divisor) {
        return new Money(this.amount / divisor, this.currency)
    }
}

const fiver = new Money(5, "USD")
const tenDollars = new Money(10, "USD")
assert.deepStrictEqual(fiver.times(2), tenDollars)

tenEuros = new Money(10, "EUR")
twentyEuros = tenEuros.times(2)
assert.deepStrictEqual(tenEuros.times(2), twentyEuros)
assert.strictEqual(twentyEuros.currency, "EUR")

originalMoney = new Money(4002, "KRW")
actualMoneyAfterDivision = originalMoney.divide(4)
expectedMoneyAfterDivision = new Money(1000.5, "KRW")
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)