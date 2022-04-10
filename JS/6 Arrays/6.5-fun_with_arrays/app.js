'use strict';
// 1. Fill an array with 100 of a same object using array fill method.
const arr1 = new Array(100);
console.log(arr1);
arr1.fill({ data: 0 }, 0, 100);
arr1[0].data = 2;
console.log(arr1[1]);

// 2. Create an array with numbers ranging from 1-100 using the Array.from method.
const arr2 = Array.from(arr1, (element, index) => (element = index + 1));
console.log(arr2);

// 3. Convert only values of an object into one array.
const obj = {
  mane: 'Ofer Tauber',
  age: 34,
  has_children: true,
};

const arr3 = Object.values(obj);
console.log(arr3);

// 4. Convert an array into one object.
const arr4 = ['a', 'b', 'c', 'd'];
const obj2 = Object.assign({}, arr4);

console.log(obj2);

// 5. Find out if an array is an array.
console.log(`arr1 ${Array.isArray(arr1) ? 'is' : 'is not'} an array`);
console.log(`obj2 ${Array.isArray(obj2) ? 'is' : 'is not'} an array`);

// 6. Copy an array.
//   • Create a copy of an array that won’t effect the original array if modified.
const arr5 = [...arr4];
//   • Create a copy of an array that will effect the original array if modified.
const arr6 = arr4;

arr6[0] = "I'm new!";
console.log(arr5);
console.log(arr4);
