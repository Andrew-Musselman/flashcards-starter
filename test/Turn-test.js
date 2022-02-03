const chai = require('Chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;
  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('guess', card);
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

});
