'use strict';

const numbers = [1, -5, 666, 2, 400, 11];

// 1. Sort the array of numbers from descending to ascending order
numbers.sort((num1, num2) => num2 - num1);

console.log(numbers);

// 2. Sort the array of numbers from ascending to decending order.

numbers.sort((num1, num2) => num1 - num2);

console.log(numbers);
