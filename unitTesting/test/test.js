const chai = require('chai')
const mocha = require('mocha')
const cF = require('../src/calFare')
const expect = chai.expect;


//Test name
describe('calFare',function () {
    it('should be rs 25 for 0 kms',function () {
        //Assertion
        let fare = cF.calculateFare(0,0);
        //Assert
        expect(fare).to.equal(25);
    })
    it('should be 35 for 3 km and 0 mins', function () {
        let fare = cF.calculateFare(3,0)
        expect(fare).to.equal(35)
    })
    it('should be 2 for 0 km and 16 mins',function () {
        expect(cF.calculateFare(0,16)).to.equal(27)
    })
})