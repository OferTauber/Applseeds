'use strict';

// 1. Recreate the challenge from the exercise 6.3-
// looping_with_arrays ,but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the
// for loop or the while loop?

const stringsLen = (stringsArr) => {
  const lengsArr = [];
  let i = 0;
  while (stringsArr[i]) {
    lengsArr.push(stringsArr[i].length);
    i++;
  }

  return lengsArr;
};

console.log(stringsLen(['boo', 'doooo', 'hoo', 'ro']));
