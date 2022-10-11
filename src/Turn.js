const { prototype } = require("mocha")

class Turn {
    constructor(guess, card) {
        this.guess = guess
        this.card = card
    }
    returnGuess() {
        return this.guess
    }
    returnCard(id) {
        const currentCard = prototypeData.filter((ele) => ele === id)
        console.log(currentCard)
        return currentCard
    }
}




module.exports = Turn