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
  })
});
