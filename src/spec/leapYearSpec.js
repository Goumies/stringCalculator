const chai = require('chai');
const should = chai.should();

describe('Tests for something', () => {

   describe('not a thing', () => {

       it('should return false, given a use case', () => {
           (0).should.equal(false);
       });

   });

    describe('a thing', () => {

        it('should return true, given another use case', () => {
            (1).should.equal(true);
        });

    });

});