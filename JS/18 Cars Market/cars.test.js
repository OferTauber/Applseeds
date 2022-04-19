const { test, expect } = require('@jest/globals');

const carMarket = require('./_CarsAg');

const testCases = [
  // *--------------- getAgencyByName
  {
    testTitle: 'getting agency by valid name',
    input: carMarket.getAgencyByName('Best Deal'),
    res: carMarket.sellers[0],
    expectType: 'toEqual',
  },
  {
    testTitle: 'getting agency by valid name - wrong case',
    input: carMarket.getAgencyByName('BeSt deal'),
    res: carMarket.sellers[0],
    expectType: 'toEqual',
  },
  {
    testTitle: 'getting agency by invalid name',
    input: carMarket.getAgencyByName('no such agancy'),
    res: undefined,
    expectType: 'toBeUndefined',
  },

  //*--------------- getAgencyIdByName
  {
    testTitle: 'getting agency id by valid name',
    input: carMarket.getAgencyIdByName('CarMax'),
    res: '26_IPfHU1',
    expectType: 'toEqual',
  },

  //*--------------- decrementOrIncrementCashOfCostumer
  {
    testTitle: 'Proper reduction of cash from a customer',
    input: carMarket.decrementOrIncrementCashOfCostumer('5x2tMcX4R', -500),
    res: 40541 - 500,
    expectType: 'toBe',
  },
  {
    testTitle: 'Over reduction of cash from a customer',
    input: carMarket.decrementOrIncrementCashOfCostumer('5x2tMcX4R', -50000),
    res: false,
    expectType: 'toBe',
  },
];

for (const testCase of testCases) {
  switch (testCase.expectType) {
    case 'toEqual':
      test(testCase.testTitle, () => {
        expect(testCase.input).toEqual(testCase.res);
      });
      break;

    case 'toBeUndefined':
      test(testCase.testTitle, () => {
        expect(testCase.input).toBeUndefined();
      });
      break;

    case 'toBe':
      test(testCase.testTitle, () => {
        expect(testCase.input).toBe(testCase.res);
      });
      break;
  }
}
