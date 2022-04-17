'use strict';

function getSum(arr1, arr2) {
  //! const sum = 0; - When running the code - a notification is received on the console: "Uncaught TypeError: Assignment to constant variable"
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}

getSum([1, 2, 3], [(5, 66, 23)]);

//? Explain the bug in your own words:
//*Because we set "SUM" as "const" instead of a variable - its value cannot be changed. In the next line of code we tried to perform a placement operation on it, so an error message was received.
