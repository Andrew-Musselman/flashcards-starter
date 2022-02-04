const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    let turnCount = this.turns;
    return this.deck[turnCount];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if(!turn.evaluateGuess()){
    this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turns ++;
    return turn.giveFeedback();
  }
}

module.exports = Round;
