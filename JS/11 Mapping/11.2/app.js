'use strict';

// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const doubleValues = (arr) => {
  return arr.map((int) => int * 2);
};

console.log('doubleValues func:', doubleValues([1, 2, 3, 4]));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const onlyEvenValues = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (element % 2 === 0) newArr.push(element);
  });

  return newArr.length === 0 ? false : newArr;
};

console.log('onlyEvenValues func:', onlyEvenValues([1, 2, 3, 4]));
console.log('onlyEvenValues func:', onlyEvenValues([1, 3, 5]));

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.
const showFirstAndLast = (arr) => {
  const newArr = [];
  arr.forEach((element, index) => {
    if (
      (index === 0 || index === arr.length - 1) &&
      typeof element === 'string'
    ) {
      newArr.push(element);
    }
  });

  return newArr;
};

console.log(showFirstAndLast([1, 2, 3, 'str']));
console.log(showFirstAndLast([1, 2, 3, ['str']]));
console.log(showFirstAndLast(['asdf', 1, 2, 3, 'str']));

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

const vowelCount = (str) => {
  const regex = /[a, e, i, o, u]/g;
  const vowelObj = new Object();

  str
    .toLowerCase()
    .split('')
    .forEach((char) => {
      if (regex.test(char) && char !== ' ') {
        if (vowelObj[char]) {
          vowelObj[char]++;
        } else {
          vowelObj[char] = 1;
        }
      }
    });

  return vowelObj;
};
console.log(vowelCount('Hellow wor ld!!+_'));

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
const capitalize = (str) => {
  return str
    .split('')
    .map((char) => char.toUpperCase())
    .join('');
};

console.log(capitalize('lowcase string'));

// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
const shiftLetters = (str) => {
  const arr = str.split('');

  return arr
    .map((char) => {
      const uniIndex = char.charCodeAt(0);
      return String.fromCharCode(uniIndex - 1);
    })
    .join('');
};

console.log(shiftLetters('bcde'));

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

const swapCase = (str) => {
  return str
    .split(' ')
    .map((word, index) => {
      return index % 2 === 1 ? word : capitalize(word);
    })
    .join(' ');
};

console.log(swapCase('Hello to you all, Rick and Morty fans!'));
