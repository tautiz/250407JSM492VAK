// Importuojame funkcijas, kurias testuosime
const circleArea = require('../js/testu_uzduotys/circleArea.js');
const palindrome = require('../js/testu_uzduotys/palindrome.js');
const maxInArray = require('../js/testu_uzduotys/maxInArray.js');

describe('circleArea', () => {
  it('should calculate area for radius 1', () => {
    expect(circleArea(1)).toBeCloseTo(Math.PI);
  });
  it('should calculate area for radius 0', () => {
    expect(circleArea(0)).toBe(0);
  });
  it('should throw error for negative radius', () => {
    expect(() => circleArea(-1)).toThrow('Invalid radius');
  });
});

describe('palindrome', () => {
  it('should return true for a palindrome', () => {
    expect(palindrome('ėmė')).toBe(true);
    expect(palindrome('A man, a plan, a canal. Panama')).toBe(true);
  });
  it('should return false for a non-palindrome', () => {
    expect(palindrome('palindromas')).toBe(false);
  });
});

describe('maxInArray', () => {
  it('should return the max number in array', () => {
    expect(maxInArray([1, 2, 3, 4, 5])).toBe(5);
    expect(maxInArray([-10, 0, 10, 2])).toBe(10);
  });
  it('should throw error for empty array', () => {
    expect(() => maxInArray([])).toThrow('Array must not be empty');
  });
  it('should throw error for non-array input', () => {
    expect(() => maxInArray('not array')).toThrow('Array must not be empty');
  });
});
