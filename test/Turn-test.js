const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
    beforeEach(() => {
     turn = new Turn('frog', 1)
    })
    it('should be a function', () => {
        expect(Turn).to.be.a('function')
    })
    it('should be an instance of a turn', () => {
        expect(turn).to.be.an.instanceof(Turn)
    })
    it('should contain a guess', () => {
        expect(turn.guess).to.equal('frog')
    })
    it('should contain a card', () => {
        expect(turn.card).to.equal(1)
    })
    it('should be able to return a guess', () => {
        expect(turn.returnGuess()).to.equal('frog')
    })
    it('should return the current card', () => {
        expect(turn.returnCard(1)).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        })
        turn.returnCard(1)
    })
})