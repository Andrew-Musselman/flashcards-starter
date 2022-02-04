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
  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100
  }
  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
