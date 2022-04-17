'use strict';

// Write a function called extractOnlyValue which accepts an array of
// objects and a key and returns a new array with the value of each object at
// the key

const extractOnlyValue = (arrOfObjs, key) => {
  return arrOfObjs.reduce((acc, cur) => {
    acc.push(cur[key]);
    return acc;
  }, []);
};

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

console.log(extractOnlyValue(library, 'title'));
console.log(extractOnlyValue(library, 'author'));
console.log(extractOnlyValue(library, 'readingStatus'));

// Write a function called countOnlyVowels which accepts a string and
// returns an object with the keys as the vowel and the values as the number
// of times the vowel appears in the string. This function should be case
// insensitive so a lowercase letter and uppercase letter should count

const countOnlyVowels = (str) => {
  const vowels = [...'aeiou'];
  const obj = str
    .toLowerCase()
    .split('')
    .reduce((acc, cur) => {
      if (vowels.includes(cur)) {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      }
      return acc;
    }, new Object());

  return obj;
};

console.log(countOnlyVowels('sdkfl'));
console.log(countOnlyVowels('asdkfl'));
console.log(countOnlyVowels('asdkandfeiufl'));

// Write a function called addKeyAndValue which accepts 3 parameters an
// array of objects, key and value and returns the array of objects passed to it with each object now including the key and value passed to the function

const addKeyAndValue = (objectsArr, key, value) => {
  return objectsArr.reduce((acc, cur) => {
    cur[key] = value;
    return acc;
  }, objectsArr);
};

console.log(library);
addKeyAndValue(library, 'lang', 'en');
console.log(library);
