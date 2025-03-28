
const fizzBuzz = require('./fizzbuzz');

test('fizzBuzz works correctly', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
  expect(fizzBuzz(3)).toBe('Fizz');     
  expect(fizzBuzz(5)).toBe('Buzz');    
  expect(fizzBuzz(7)).toBe('7');        
  expect(fizzBuzz(0)).toBe('FizzBuzz'); 
});