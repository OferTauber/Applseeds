'use strict';
// String.prototype.toJadenCase = function () {
//   const arr = this.split(' ').map((word) => {
//     word = word.split('');
//     console.log(word);
//     word[0].toUpperCase();
//     console.log(word);
//     return word.join('');
//   });

//   return arr;
// };

// var str = "How can mirrors be real if our eyes aren't real";

// console.log(str.toJadenCase());
function rgb(r, g, b) {
  r = r > 255 ? 255 : r;
  g = g > 255 ? 255 : g;
  b = b > 255 ? 255 : b;
  return r.toString(16) + g.toString(16) + b.toString(16);
}
console.log(rgb(0, 0, 0)); //, '000000');
console.log(rgb(0, 0, -20)); //, '000000');
console.log(rgb(300, 255, 255)); //, 'FFFFFF');
console.log(rgb(173, 255, 47)); //, 'ADFF2F');
