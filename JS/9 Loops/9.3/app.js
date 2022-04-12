'use strict';

// Instructions
// You are given two arrays:
const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];

// Create a function that takes these two arrays as arguments.
// Compare these two arrays using 2 for loops and return the items that are the same. If none are the same return false.

const compareArrs = (arr1, arr2) => {
  const arrToReturn = new Array();
  for (let i1 = 0; i1 < arr1.length; i1++) {
    for (let i2 = 0; i2 < arr2.length; i2++) {
      if (arr1[i1] === arr2[i2]) {
        arrToReturn.push(arr1[i1]);
      }
    }
  }

  return arrToReturn[0] ? arrToReturn : false;
};

console.log(compareArrs(food, food1));
