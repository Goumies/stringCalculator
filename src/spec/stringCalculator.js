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
        const intNumbers = stringValuesOfNumbers
            .map(numberStringValue => parseInt(numberStringValue));
        let negativesNumbers = [];
        intNumbers.forEach(intNumber => {
            if (intNumber < 0) {
                negativesNumbers.push(intNumber);
            }
        });

        if (negativesNumbers.length > 0) {
            throw `error: negatives not allowed: ${Object.values(negativesNumbers).toString()}`;
        }
        return intNumbers;
    }

    static getSplit(numbers) {
        console.log(numbers);
        if (numbers.includes('-'))
            return numbers.split(',')
                .filter(element => Number.isNaN(parseInt(element)) === false);
        return numbers.split('')
            .filter(element => Number.isNaN(parseInt(element)) === false);
    }

    static parseStringValuesToInt(numbers) {
        return Utils.intValueOf(Utils.getSplit(numbers));
    }
}



class StringCalculator {

    constructor() {

    }

    static add(numbers) {
        if (Utils.containsSeveralNumbersIn(numbers)) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            try {
                const test = Utils.parseStringValuesToInt(numbers);
                return (test)
                    .reduce(reducer);
            } catch (error) {
                return error;
            }
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

    describe('Arbitrary number size', () => {

        it('should return the sum, given unknown amount of numbers', () => {
            (StringCalculator.add('1,2,3,4,5,6,7,8,9')).should.equal(45);
        });

        it('should return the sum, given unknown amount of numbers', () => {
            let stringBuilder = '';
            const MAX_VALID_ARRAY_LENGTH = (2 ** 20);
            let array = Array(MAX_VALID_ARRAY_LENGTH).fill(1, 0, MAX_VALID_ARRAY_LENGTH);
            array.forEach(element => stringBuilder += element);
            const numbers = stringBuilder;

            (StringCalculator.add(numbers)).should.equal(MAX_VALID_ARRAY_LENGTH);
        });

    });

    describe('Newline separator', () => {

        it('should return the sum, given comma and new line separator', () => {
            (StringCalculator.add('1\n2,3')).should.equal(6);
        });

    });

    describe('Custom separators', () => {

        it('should return the sum, given custom separators', () => {
            (StringCalculator.add('//;\n1;2')).should.equal(3);
        });

    });

    describe('Disallow negatives', () => {

        it('should throw an exception negatives not allowed, and the negative that was passed, given negative numbers', () => {
            (StringCalculator.add('1,-2,-3')).should.equal('error: negatives not allowed: -2,-3');
        });

    });

});