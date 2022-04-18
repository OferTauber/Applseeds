'use strict';

// Without running the code below, explain in your own words what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.

//* Block 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}

funcA();
//! As funcA is called - it immediately  try to log 'a'. 'a' has yet to be declared or set, but since it is 'var'  - it's declaration is being hoisted, and the result is "undefined".
//! Next - funcA try to log the return value of 'foo'. Since foo is declared within the csope of funcA - the declaration and thr dafinition are being hoisted and foo can be sucsessfuly calld (with the return value of 2)
//

//* Block 2
var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //? Aurelio De Rosa
var test = obj.prop.getFullName;
console.log(test()); //? John Doe
//! The "this" keyword refers to the function-call-context.
//! In the first case the "getFullName" function was called by "props" object (nested within 'obj')' thearfor 'this' refer to 'props', wiche have a property with a key 'fullname' and value of "Aurelio De Rosa".
//! Next call of the function is using the global "test" variable, meaning thet 'this' refers to the script global scope, having fullname set to "John Doe"
//

//* Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return 5;
}
funcB();
console.log(typeof a); //!a is defined inside the function, and therefore is not accessible outside it - "Undefined" will be printed

console.log(typeof b); //! B is defined as a global variable and therefore accessible even outside the function - "number" will be printed

//* Block 4
function funcC() {
  console.log('1');
}
funcC();
function funcC() {
  console.log('2');
}
funcC();
//! The funcC function is set twice.
//! In the first stage the interpreter goes over the code and therefore the first instance is "run over" by the second instance.
//! In the second stage the code is executed, and when the function funcC is called - the second instance will always be executed
///*

//* Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); //! d has been defined as a global variable, so it can also be accessed outside the function. "1" will be printed
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); //! e has been defined as an internal variable for a function, and therefore cannot be accessed even outside the function. The code will brake

//* Block 6
function funcE() {
  console.log('Value of f in local scope: ', f);
}
console.log('Value of f in global scope: ', f); //! f has been defined as a global variable (so it has a reserved name already at the beginning of the run), but at this point it has not yet been assigned a value. "Undefined" will be printed but the code will not be broken.
var f = 1;
funcE(); //! Printing is done from within the function, and because the variable is global it is also accessible from within the function. Printing is done after a value of "1" is set and therefore "1" will be printed.
