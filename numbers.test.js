const isEven = require('./numbers');

test('isEven uses remainder correctly', () => {
 
  expect(isEven(4)).toBe(true);
  expect(isEven(5)).toBe(false);
  expect(isEven(-2)).toBe(true);
});