const reverseString = require('./stringUtils');

test('reverseString reverses strings correctly', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('')).toBe('');      
  expect(reverseString('x')).toBe('x');     
});