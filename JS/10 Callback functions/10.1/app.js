'use strict';

// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.
const isString = (str, func) => {
  if ('string' === typeof str) {
    func(str);
  }
};

isString('Hellow!', console.log);
isString(true, console.log);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
const firstWordUpperCase = (str, func) => {
  const arrFrmString = str.split(' ');
  arrFrmString[0] = arrFrmString[0].toUpperCase();

  return func(arrFrmString.join(' '));
};

const replaceSpaces = (str) => {
  return str.replaceAll(' ', '-');
};

console.log(
  firstWordUpperCase('hellow to you, have a nice day', replaceSpaces)
);

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
console.log(
  firstWordUpperCase('hello to you all', (str) => str.replaceAll('to', '2'))
);

// 4. Create your own function that will receive from one of its
// arguments a callback function.

const allterAndReversWord = (str, func) => {
  if (typeof str !== 'string') return false;

  return func(str.split('').reverse().join(''));
};

console.log(allterAndReversWord('hellow world', replaceSpaces));
