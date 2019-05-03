const chai = require('chai');
const should = chai.should();

function isDivisible(year, divisible) {
    return year % divisible === 0;
}

function isleapYear(year) {
    let divisible = 4;
    if (isDivisible(year, divisible)) return true;

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

});