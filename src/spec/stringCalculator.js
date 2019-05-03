const chai = require('chai');
const should = chai.should();

class Utils {
    constructor() {

    }

    static containsOnlyASingleNumberIn(numbers) {
        return numbers.length === 1;
    }

    static containsSeveralNumbersIn(numbers) {
        return numbers.length > 1;
    }

    static intValueOf(stringValuesOfNumbers) {
        return stringValuesOfNumbers
            .map(numberStringValue => parseInt(numberStringValue));
    }

    static getSplit(numbers) {
        return numbers.split(',');
    }
}


class StringCalculator {

    constructor() {

    }

    static add(numbers) {
        if (Utils.containsSeveralNumbersIn(numbers)) {
            return Utils.intValueOf(Utils.getSplit(numbers))
                .reduce((accumulator, currentValue) => accumulator + currentValue);
        }
        if (Utils.containsOnlyASingleNumberIn(numbers))
            return parseInt(numbers);
        return numbers.length;
    };
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