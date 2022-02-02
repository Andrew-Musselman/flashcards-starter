const chai = require('Chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

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
    const turn = new Turn();
    expect(turn.arguments[0]).to.be.a('string');
  });
});
