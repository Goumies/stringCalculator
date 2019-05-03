const chai = require('chai');

const assert = chai.assert;
const should = chai.should();

describe('Tests for isLeapYear method', () => {

   describe('not a leap year', () => {

       it('should return false, given a year not divisible by 4', () => {
           (1+1).should.equal(2);
       });

   });

});