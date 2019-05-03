const chai = require('chai');
const should = chai.should();

class StringCalculator {
    constructor() {

    }

    static add(numbers) {
        return numbers.length;
    };
}

describe('Tests for stringCalculator', () => {

    describe('Simple Calculator', () => {

        it('should return 0, given an empty string', () => {
            (StringCalculator.add('')).should.equal(0);
        });

   });

});