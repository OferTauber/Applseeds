'use strict';
String.prototype.toJadenCase = function () {
  const arr = this.split(' ').map((word) => {
    word = word.split('');
    console.log(word);
    word[0].toUpperCase();
    console.log(word);
    return word.join('');
  });

  return arr;
};

var str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());
