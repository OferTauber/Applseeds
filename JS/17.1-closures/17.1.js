'use strict';

// * Block 1
var b = 1;
function someFunction(number) {
  // void number;
  function otherFunction(input) {
    // void input;
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

//! The someFunction function receives input, but ignores it, and performs 3 operations:
//! Defining the otherFunction function, defining the (global) variable b and repeating the otherFunction function.
//! In the firstResult setting we run the someFunction function which returns the otherFunction and as a side effect changes the value of b to 5.
//! Calling firstResult (which contains the function otherFunction) prints the variable b that we have changed its value to be 5.

// * Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

//! Within the b2 function, the function a is defined (even if it is after the return). In the interpreter phase - the variable a is defined twice - once in the global scope, and a second time within the b2 function (as an internal function).
//! In the code execution phase - when function b2 tries to redefine a - it does not refer to the global variable but to its internal function.
//! So even after running b2 - printing the global value of a will display 1 - it's just not the same a
