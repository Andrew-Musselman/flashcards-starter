const chai = require('Chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Test', function() {
  beforEach(function() {
    const turn = new Turn();
  })

  it('Should be a function', function() {
    expect(Turn).to.be.a('function');
  });
  it('Should be an instance of Turn', function() {
    expect(turn).to.be.instanceof(Turn);
  });
  it('Should take a string as its first argument', function() {
    expect(turn.arguments[0]).to.be.a('string');
  });
});
