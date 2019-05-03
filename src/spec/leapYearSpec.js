const chai = require('chai');
const should = chai.should();

const LEAP_YEAR_DIVISIBLE_SHORT_CYCLE = 4;
const LEAP_YEAR_DIVISIBLE_LONG_CYCLE = 400;

function isDivisibleByYears(year) {
    return year % LEAP_YEAR_DIVISIBLE_SHORT_CYCLE === 0;

}

function isDivisibleByCenturies(year) {
    return year % LEAP_YEAR_DIVISIBLE_LONG_CYCLE === 0;
}

function isDivisibleByCentury(year) {
    return year % 100 === 0;
}

function isLeapYear(year) {
    return isDivisibleByYears(year) && !(isDivisibleByCentury(year) && !isDivisibleByCenturies(year));
}

describe('Tests for isLeapYear method', () => {

   describe('not a leap year', () => {

       it('should return false, given a year not divisible by 4', () => {
           isLeapYear(2005).should.equal(false);
           isLeapYear(2001).should.equal(false);
           isLeapYear(1993).should.equal(false);
       });

       it('should return false, given a year divisible by 4 or 100 but not by 400', () => {
           console.log(1800 % 400, 1800 % 4)
           isLeapYear(1800).should.equal(false);
       });

   });

    describe('a leap year', () => {

        it('should return true, given a year divisible by 4', () => {
            isLeapYear(2004).should.equal(true);
            isLeapYear(1904).should.equal(true);
            isLeapYear(1984).should.equal(true);
        });

        it('should return true, given a year divisible by 400', () => {
            isLeapYear(1600).should.equal(true);
            isLeapYear(1904).should.equal(true);
            isLeapYear(1984).should.equal(true);
        });

    });

});