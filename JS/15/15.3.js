'use strict';

function getSumOfEven(arr) {
  // return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//! In the first step I ran the function on the console and got NAN instead of 30.
//! Using the debugger I marked a brack point in the schema operation (line 5), and set Wathc on each of the elemants - arr[10] was undefined.
