'use strict';

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      // counter + 1;
      counter += 1;
    }
  }
  return counter;
}
countOccurrences('ini mini miny moe', 'n');

//! I set a breakpoint on the loop definition, and examined the values for comparison and the counter.
//! I have seen that in every round where there is a comparison the "if" condition is met, but the +1 operation does not increase the value of the counter.
//! The problem was that no placement operation was performed.
