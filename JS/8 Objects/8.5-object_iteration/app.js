'use strict';

// 1. Create a function that receives 1 argument, an object and returns a new object with the properties and values swapped.

const myObj = {
  1: 'a',
  2: 'b',
  3: 'c',
};

const objOpposite = (obj) => {
  const newObj = new Object();
  for (const prop in obj) {
    newObj[obj[prop]] = prop;
  }
  // for (const key of Object.keys(obj)) {
  //   const newKey = obj[key];
  //   newObj[newKey] = key;
  // }

  return newObj;
};

// const myObj2 = objOpposite(myObj);
const myObj2 = objOpposite(myObj);

// myObj[1] = 'A';

console.log(myObj);
console.log(myObj2);
