const { test, expect } = require('@jest/globals');

const array = require('./24.3Build your own methods');
Array.prototype.myFilter = array.filter;

const callbackIsNegativAndHaveOddIndex = (value, index) =>
  value < 0 && index % 2;
const callbackIsNumAndInTheBackHalfOfTeeArray = (value, index, arr) => {
  index >= arr.length && typeof (value === 'number');
};

describe('myFind', () => {
  const onlyNumbers = [2, 4, -1, 23, 4];

  test('Find using simpal callback', () => {
    const callbackIsNegativ = (value) => value < 0;

    expect(onlyNumbers.myFilter(callbackIsNegativ)).toBe(
      onlyNumbers.filter(callbackIsNegativ)
    );
  });
});
