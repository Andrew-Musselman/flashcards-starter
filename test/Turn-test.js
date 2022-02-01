const chai = require('Chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Test', function() {

  it('Should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
});
