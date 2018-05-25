const expect = require('chai').expect;
const num = require('../fizzBuzzer.js')

describe ('num' , function(){
  it('should be divisible by 15,5,3 and be a number.', function(){

  //expect(num('the')).to.equal(Error(`'num' must be a number`));
  expect(num(15)).to.equal('fizz-buzz');
  expect(num(3)).to.equal('fizz');
  expect(num(5)).to.equal('buzz');
  expect(num(7)).to.equal(7);
  });
});
