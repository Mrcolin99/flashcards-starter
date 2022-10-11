const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    beforeEach(() => {
        turn = new Turn()
    })
    it('should be a function', function() {
        expect(turn).to.be.a('function')
    })
    it('should be an instance of a turn', function() {
        expect(turn).to.be.an.instanceof(Turn)
    })
})