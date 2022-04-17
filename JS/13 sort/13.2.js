'use strict';

const foods = ['falafel', 'sabich', 'hummus', 'pizza with extra pineapple'];

// a.1. Sort the array of strings from descending to ascending order
// a.2. Sort the array of strings from ascending to descending order

const callbackAscendingString = (str1, str2) => {
  return str1 < str2 ? -1 : 1;
};
const callbackDescendingString = (str1, str2) => {
  return str1 > str2 ? -1 : 1;
};

foods.sort(callbackAscendingString);
console.log(foods);

foods.sort(callbackDescendingString);
console.log(foods);

// b. Lets sort an array of words that includes a word with an uppercase:

const foodsWithUpperCase = [
  'falafel',
  'Sabich',
  'hummus',
  'pizza with extra pineapple',
];

// b.1. Sort the array of strings from descending to ascending order.
// b.2. Sort the array of strings from ascending to descending order.

foodsWithUpperCase.sort(callbackAscendingString);
console.log(foodsWithUpperCase);

foodsWithUpperCase.sort(callbackDescendingString);
console.log(foodsWithUpperCase);

const callbackAscendingStringNonCase = (str1, str2) => {
  return str1.toLowerCase() < str2.toLowerCase() ? -1 : 1;
};
const callbackDescendingStringNonCase = (str1, str2) => {
  return str1.toLowerCase() > str2.toLowerCase() ? -1 : 1;
};

foodsWithUpperCase.sort(callbackAscendingStringNonCase);
console.log(foodsWithUpperCase);

foodsWithUpperCase.sort(callbackDescendingStringNonCase);
console.log(foodsWithUpperCase);

// Sort the array of strings from the longest word to the shortest word only using the sort function
const words = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];

words.sort((word1, word2) => word2.length - word1.length);
console.log(words);
