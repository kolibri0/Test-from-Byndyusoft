
const { arraySummTest } = require("./arraySumm")

test('Check arraySumm foo', () => {
  expect(arraySummTest('1,2,3,4,5')).toBe(3)
  expect(arraySummTest('5,8,9,9,18')).toBe(13)
});

test('Check arraySumm foo without value', () => {
  expect(arraySummTest()).toBe(0)
});

test('Check arraySumm foo with negative numbers', () => {
  expect(arraySummTest('1,2,-3,4,-55,1,34,5')).toBe(-58)
  expect(arraySummTest('1,2,3,4,55,1,34,5,-90,-32')).toBe(-122)
});

test('Check arraySumm foo with word', () => {
  expect(arraySummTest('banana')).toBe(NaN)
});