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

// const test = (testCasesArr, callback) => {
//   for (const testCase of testCasesArr) {
//     const res = callback(...testCase.caseInput);
//     if (testCase.expected !== res) {
//       console.error(`test fail for case ${testCase.caseInput}`);
//       console.info(`res = ${res}`);
//       console.info(`exp = ${testCase.expected}`);
//     }
//   }
// };

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
