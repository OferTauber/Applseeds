'use strict';

// Create a function that received an array of integers as a parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.
// Example:
// [3,4,4,3,6,3] --→ [3,4,6]

const arrWithDups = [3, 4, 4, 3, 6, 3, 5, 5, 1];

const removeDuplicates = (arr) => {
  const newArr = [];
  for (const num of arr) {
    if (-1 === newArr.indexOf(num)) newArr.push(num);
  }

  return newArr;
};

console.log(removeDuplicates(arrWithDups));
