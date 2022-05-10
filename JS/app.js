'use strict';

function permutations(string) {
  const generateCombination = (str, arr, set) => {
    if (1 === arr.length) {
      set.add(str + arr[0]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const tempArr = [...arr];
      const tempStr = str + tempArr.splice(i, 1);
      generateCombination(tempStr, tempArr, set);
    }
  };

  const set = new Set();

  generateCombination('', string.split(''), set);

  return Array.from(set);
}

console.log(permutations('baa'));

//-------
// Array.prototype.sameStructureAs = function (other) {
//   const isPrimitive = (variable) =>
//     typeof variable === 'number' || typeof variable === 'string';

//   const isSame = (var1, var2) => {
//     if (isPrimitive(var1)) return isPrimitive(var2);
//     return Array.isArray(var1) === Array.isArray(var2);
//   };

//   const comper = (arr1, arr2) => {
//     if (!isSame(arr1, arr2)) return false;

//     if (Array.isArray(arr1)) {
//       for (let i = 0; i < arr1.length; i++) {
//         if (!comper(arr1[i], arr2[i])) return false;
//       }
//     }
//     return true;
//   };

//   return comper(this, other);
// };

//-------

// Array.prototype.sameStructureAs2 = function (other) {
//   const comper = (arr1, arr2) => {
//     if (typeof arr1 !== typeof arr2) return false;

//     if (typeof arr1 === 'array' && typeof arr2 === 'array') {
//       for (let i = 0; i < arr.length; i++) {
//         if (!comper(arr1[i], arr2[i])) return false;
//       }
//       return true;
//     } else {
//       return false;
//     }
//   };

//   return comper(this, other);
// };

console.log([1, 1, 1].sameStructureAs([2, 2, 2]));
console.log([].sameStructureAs({}));

// [1,1,1] same as [2,2,2]
// [1,[1,1]] same as [2,[2,2]]
// Test Passed
// Test Passed
// [[[],[]]] same as [[[],[]]]
// Test Passed
// [1,[[[1]]]] same as [2,[[[2]]]]
// Test Passed
// Test Passed
// [1,'[',']'] same as ['[',']',1]

// function getCount(str) {
//   let vowelsCount = str
//     .toLowerCase()
//     .split('')
//     .reduce((acc, cur) => {
//       if (cur.match(/["a", "e", "i", "o", "u"]/) && cur !== ' ') acc++;
//       return acc;
//     }, 0);

//   return vowelsCount;
// }

// console.log(getCount('abracadabra'));
// console.log(getCount('pear tree'));
