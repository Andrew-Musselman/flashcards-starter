const chai = require('Chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;
  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('sea otter', card);
  });

  it('Should be a function', function() {
    expect(Turn).to.be.a('function');
  });
  it('Should be an instance of Turn', function() {
    expect(turn).to.be.instanceof(Turn);
  });
  it('Should take a string as its first argument', function() {
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('sea otter');
  });
  it('Should take a card object as its second argument', function() {
    expect(turn.card).to.be.an('object');
    expect(turn.card).to.equal(card);
  });
  it('Should return the user\'s guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('sea otter');
  });
  it('Should return the card', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
  });
  it.skip('Should evaluate true if the guess matches the correct answer on the card', function() {
    let rightTurn = new Turn('sea otter', card)
    rightTurn.evaluateGuess();
    expect(turn.evaluateGuess()).to.be.true;
  });
  it.skip('Should evaluate false if the guess does not match the correct answer on the card', function() {
    let wrongTurn = new Turn('pug', card)
    wrongTurn.evaluateGuess();
    expect(turn.evaluateGuess()).to.be.false;
  });
  it.skip('Should return correct if the guess is correct', function() {
    let rightTurn = new Turn('sea otter', card)
    rightTurn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('correct!');
  });
  it.skip('Should return incorrect if the guess is incorrect', function() {
    let wrongTurn = new Turn('pug', card)
    wrongTurn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })
});
