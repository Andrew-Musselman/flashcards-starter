const chai = require('Chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('Should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
  it('Should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.instanceof(Turn);
  });
  it('Should take a string as its first argument', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    expect(turn.arguments[0]).to.be.a('string');
  });
  it('Should take a card object as its second argument', function() {
    expect(turn.arguments[1]).to.be.an('object');
  });
});
