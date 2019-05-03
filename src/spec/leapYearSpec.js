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

function isleapYear(year) {
    if (isDivisibleByCenturies(year)) return true;
    if (isDivisibleByYears(year)) return true;

    return false;
}

describe('Tests for isLeapYear method', () => {

   describe('not a leap year', () => {

       it('should return false, given a year not divisible by 4', () => {
           isleapYear(2005).should.equal(false);
           isleapYear(2001).should.equal(false);
           isleapYear(1993).should.equal(false);
       });

   });

    describe('a leap year', () => {

        it('should return true, given a year divisible by 4', () => {
            isleapYear(2004).should.equal(true);
            isleapYear(1904).should.equal(true);
            isleapYear(1984).should.equal(true);
        });

    });

    describe('a leap year', () => {

        it('should return true, given a year divisible by 400', () => {
            isleapYear(1600).should.equal(true);
            isleapYear(1904).should.equal(true);
            isleapYear(1984).should.equal(true);
        });

    });

});