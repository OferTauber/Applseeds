Array.prototype.myFilter = function (callback) {
  const toReturn = [];
  for (let [index, element] of this.entries()) {
    if (callback(element, index, this)) toReturn.push(element);
  }

  return toReturn;
};

Array.prototype.myFind = function (callback) {
  for (const [index, element] of this.entries()) {
    if (callback(element, index, this)) return element;
  }

  return;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let [index, value] of this.entries()) {
    if (acc) {
      acc = callback(acc, value, index, this);
    } else {
      acc = value;
    }
  }
  return acc;
};

const arr = [1, 2, -2, 3, -4, 9];
console.log(arr.myFilter(isPositive));
console.log(arr.filter(isPositive));

function isPositive(num) {
  return num >= 0;
}

[1].reduce((i) => {
  i + 1;
});

const nums = [1, 2, 3, 4, 5];
console.log(
  nums.myReduce((acc, cur, index) => {
    return acc + cur + index;
  }, 4)
);
console.log(
  nums.reduce((acc, cur, index) => {
    return acc + cur + index;
  }, 4)
);

module.export = {
  filter: Array.myFilter,
  reduce: Array.myReduce,
  find: Array.myFind,
};
