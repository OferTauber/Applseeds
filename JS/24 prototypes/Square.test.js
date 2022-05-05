const { test, expect } = require('@jest/globals');

const Square = require('./24.1Square.js');

test('Square 1: Valid Square', () => {
  const validSquare = new Square(2, 2, 2, 2);
  expect(validSquare.isSquare()).toBeTruthy();
});

test('Square 2: Invalid Square', () => {
  const invalidSquare = new Square(1, 2, 1, 4);
  expect(invalidSquare.isSquare()).toBeFalsy();
});

test('Square 3: Overflowing valid Square', () => {
  const invalidSquare = new Square(2, 2, 2, 2, 4, 7, 9, 12);
  expect(invalidSquare.isSquare()).toBeTruthy();
});

test('Square 4: Overflowing invalid Square', () => {
  const invalidSquare = new Square(2, 2, 2, 4, 7, 9, 12);
  expect(invalidSquare.isSquare()).toBeFalsy();
});

test('Square 5: Array is too short', () => {
  const invalidSquare = new Square(2, 2);
  expect(invalidSquare.isSquare()).toBeFalsy();
});

test('Square 6: input of non-numbers', () => {
  const invalidSquare = new Square('a', { 2: 2 }, 2, 2);
  expect(invalidSquare.isSquare()).toBeFalsy();
});
