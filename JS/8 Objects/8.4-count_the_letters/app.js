'use strict';

// Create a function that takes one argument, an array.
// Use this array:
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
// "hamburgers"];

// Extra:
// return the letter with the most occurrences as well

const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];

// const countLetters = (arr) => {
//   const lettersObj = {};
//   for (const word in arr) {
//     for (const char in word) {
//       if (lettersObj[char]) {
//         lettersObj[char]++;
//       } else {
//         lettersObj[char] = 1;
//       }
//     }
//   }
//   return lettersObj;
// };

const countLetters = (arr) => {
  const lettersObj = {};
  for (const word of arr) {
    for (const char of word) {
      const lowChar = char.toLowerCase();
      if (!lettersObj[lowChar]) {
        lettersObj[lowChar] = 1;
      } else {
        lettersObj[lowChar]++;
      }
    }
  }
  return lettersObj;
};

console.log(countLetters(array));
