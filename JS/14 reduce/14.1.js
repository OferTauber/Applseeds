'use strict';

//! Write the following functions using the reduce built-in function.
//* 1. max

Math.maxUsingReduce = (...nums) => {
  return nums.reduce((previousValue, currentValue) => {
    if (
      typeof previousValue !== 'number' ||
      typeof currentValue !== 'number' ||
      isNaN(previousValue) ||
      isNaN(currentValue)
    )
      return NaN;
    return previousValue > currentValue ? previousValue : currentValue;
  });
};

const maxUsingReduceTest = () => {
  const cases = [
    [1, 2, 3, 4],
    [1, 1, 2, 3, 4],
    [NaN, 2, 4, 5],
    [-2, 6, NaN, 2, 4, 5],
    [0, -1, -2, 4],
    ['a', 2, 3, 4],
    ['adfdsdhj', 2, 3, 4],
  ];

  for (const testCase of cases) {
    const res = Math.maxUsingReduce(...testCase);
    const exp = Math.max(...testCase);
    if (res !== exp && !isNaN(exp) && !isNaN(res)) {
      console.error(`test fail for case ${testCase}`);
      console.info(`case = ${testCase}`);
      console.info(`res = ${Math.maxUsingReduce(testCase)}`);
      console.info(`exp = ${Math.max(testCase)}`);
    }
  }
};

maxUsingReduceTest();

//* 2. sum of even numbers
Math.sumOfEvenNums = (...nums) => {
  return nums.reduce(
    (previousValue, currentValue) =>
      currentValue % 2 ? previousValue : previousValue + currentValue,
    0
  );
};

const sumOfEvenNumsCases = [
  { caseInput: [1, 1, 1, 1], expected: 0 },
  { caseInput: [1, 2, 3, 4], expected: 6 },
  { caseInput: [-2, 2, -4, 4], expected: 0 },
];

//* 3. average
Math.averageUsingReduce = (...nums) => {
  const arrLength = nums.length;
  const sum = nums.reduce((previousValue, currentValue) => {
    if (
      typeof previousValue !== 'number' ||
      typeof currentValue !== 'number' ||
      isNaN(previousValue) ||
      isNaN(currentValue)
    )
      return NaN;

    return previousValue + currentValue;
  });

  return isNaN(sum) ? sum : sum / arrLength;
};

const averagewTests = [
  { caseInput: [1, 1, 1, 1], expected: 1 },
  { caseInput: [1, 2, 3, 4], expected: 2.5 },
  { caseInput: [-2, 2, -4, 4], expected: 0 },
];

const test = (testCasesArr, callback) => {
  for (const testCase of testCasesArr) {
    const res = callback(...testCase.caseInput);
    if (testCase.expected !== res) {
      console.error(`test fail for case ${testCase.caseInput}`);
      console.info(`res = ${res}`);
      console.info(`exp = ${testCase.expected}`);
    }
  }
};

test(averagewTests, Math.averageUsingReduce);
test(sumOfEvenNumsCases, Math.sumOfEvenNums);
