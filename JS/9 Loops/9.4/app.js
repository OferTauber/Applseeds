'use strict';

// Write a function that has one argument, a positive integer. Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has spaces on the right hand side if empty!

const steps = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let k = 1; k <= n; k++) {
      str += k <= i ? '#' : ' ';
    }
    str += '|';
    console.log(str);
  }
};

const stepsRepeat = (n) => {
  const hash = '#';
  const space = ' ';
  for (let i = 1; i <= n; i++) {
    console.log(`${hash.repeat(i)}${space.repeat(n - i)}|`);
  }
};

steps(6);

stepsRepeat(12);
