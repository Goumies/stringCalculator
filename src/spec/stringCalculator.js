const chai = require('chai');
const should = chai.should();

class StringCalculator {
    constructor() {

    }

    static add(numbers) {
        if (StringCalculator.containsOnlyASingleNumberIn(numbers))
            return parseInt(numbers);
        return numbers.length;
    };

    static containsOnlyASingleNumberIn(numbers) {
        return numbers.length === 1;
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

   });

});