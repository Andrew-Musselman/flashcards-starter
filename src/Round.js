const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0
  }
  returnCurrentCard() {
    let turnCount = this.turns;
    return this.deck[turnCount]
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turns ++
    return turn.giveFeedback()
  }
}

module.exports = Round;
