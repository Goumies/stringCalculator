const chai = require('chai');
const should = chai.should();

class StringCalculator {
    constructor() {

    }

    static add(numbers) {
        if (StringCalculator.containsOnlySeveralNumbersIn(numbers))
            return numbers.split(',')
                .reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue), 0);
        if (StringCalculator.containsOnlyASingleNumberIn(numbers))
            return parseInt(numbers);
        return numbers.length;
    };

    static containsOnlyASingleNumberIn(numbers) {
        return numbers.length === 1;
    }

    static containsOnlySeveralNumbersIn(numbers) {
        return numbers.length > 1;
    }
}

describe('Tests for stringCalculator', () => {

    describe('Simple Calculator', () => {

        it('should return 0, given an empty string', () => {
            (StringCalculator.add('')).should.equal(0);
        });

        it('should return string value, given a single number', () => {
            (StringCalculator.add('4')).should.equal(4);
        });

        it('should return sum, given 2 numbers', () => {
            (StringCalculator.add('1,2')).should.equal(3);
            (StringCalculator.add('2,2')).should.equal(4);
        });

   });

});