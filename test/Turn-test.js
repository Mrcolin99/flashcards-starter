const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    beforeEach(() => {
        turn = new Turn('object', {
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
          })
    })
    it('should be a function', function() {
        expect(turn).to.be.a('function')
    })
    it('should be an instance of a turn', function() {
        expect(turn).to.be.an.instanceof(Turn)
    })
    it('should be instantiated with a guess and a card', function() {
        expect(turn.guess).to.be.a('string')
    })
    it('should be able to return a guess', function() {
        expect(turn.returnGuess()).to.equal('object')
    })
    it('should be able to return the current card', function() {
        expect(turn.returnCard()).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
          })
    })
    it('should evaluate the asnwer and return true or false', () => {
        expect(turn.evaluateGuess()).to.equal(true)
    })
    it('should return with feedback if the answer is correct or incorrect', () => {
        expect(turn.giveFeedback()).to.equal('correct!')
    })
})