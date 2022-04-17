'use strict';

function calcAverage(arr) {
  // var sum;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // return sum;
  return sum / arr.length;
}
calcAverage([85, 90, 92]);

//! I defined a breakpoint on the calculation operation, and examined the values in the calculation. Because the initial value is not defined: the result of the calculation will always be undefined.
//! In addition - the function only executes a scheme, but since it is called calcAverage I added a division of the end result in the length of the array (to get an average and not a sum)
