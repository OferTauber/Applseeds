'use strict';

function /*findSmallest*/ findSmalest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}

findSmalest(52, 66, 2);

//!Running the code gives an error message on the console: findSmalest is not defined. When I searched for the place where the "findSmalest" function was defined - I discovered that it was never defined, and there is a typo in the name.
