const chai = require('Chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('Should be a function', function() {
    expect(Round).to.be.a('function');
  });
  it('Should have a deck', function() {
    expect(round.deck).to.eql([card1, card2, card3]);
  });
  it('Should have a current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });
  it('Should have a turn count that starts at 0' , function() {
    expect(round.turns).to.equal(0)
  });
  it('The turn count should increase with every turn', function() {
    expect(round.takeTurn).to.be.a('function');
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.turns).to.equal(2)
  })
  it('Should keep track of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.eql([]);
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.eql([14]);
  });
  it('Should switch the current card to the next card in the deck', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.returnCurrentCard()).to.equal(card3);
  });
  it('Should evaluate when a guess is correct', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });
  it('Should evaluate when a guess is incorrect', function() {
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
  });
  it('Should calculate the percent of guesses that are correct', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });
  it('Should have an end', function() {
    expect(round.endRound()).to.be.a('function');
    expect(round.endRound()).to.equal('**Round over!** You answered 50% of the questions correctly!');
  });
})
