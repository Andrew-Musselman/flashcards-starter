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

  it.skip('Should be a function', function() {
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
  it.skip('Should be an instance of Turn', function() {
    // const turn = new Turn();
    expect(turn).to.be.instanceof(Turn);
  });
  it.skip('Should take a string as its first argument', function() {

    expect(turn.arguments[0]).to.be.a('string');
  });
  it.skip('Should take a card object as its second argument', function() {
    expect(turn.arguments[1]).to.be.an('object');
  });
  it.skip('Should return the user\'s guess', function() {
    expect(turn.returnGuess()).to.equal('sea otter');
  });
  it.skip('Should return the card', function() {
    expect(turn.returnCard()).to.equal(card);
  });
  it.skip('Should evaluate true if the guess matches the correct answer on the card', function() {
    let rightTurn = new Turn('sea otter', card)
    expect(turn.evaluateGuess()).to.be.true;
  });
  it.skip('Should evaluate false if the guess does not match the correct answer on the card', function() {
    let wrongTurn = new Turn('pug', card)
    expect(turn.evaluateGuess()).to.be.false;
  });
  it.skip('Should return correct if the guess is correct', function() {
    let rightTurn = new Turn('sea otter', card)
    expect(turn.giveFeedback()).to.equal('correct!');
  });
  it.skip('Should return incorrect if the guess is incorrect', function() {
    let wrongTurn = new Turn('pug', card)
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })
});
