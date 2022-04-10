'use strict';

// 1. Create an array containing 4 population values of 4 countries of your choice.
// Store this array into a variable called 'populations'
const populations = [1140, 8, 112, 43];
const world_pop = 7900;

// 2. Create a function called ‘populationPercentages’ that takes the
// population array as an argument.
// 3. Inside the function, create an empty array called ‘percentages’.
// 4. Use a for loop to iterate over the population array you received as an argument..
// 5. On each iteration use the function we created earlier (module 3, ex.3.3-declarations vs expressions) for each element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.
const percentageOfWorld = (population) =>
  Math.floor((population / world_pop) * 10000) / 100;

const populationPercentages = (populationsArr) => {
  const percentages = [];
  for (let i = 0; i < populationsArr.length; i++) {
    percentages.push(percentageOfWorld(populationsArr[i]));
  }

  return percentages;
};

console.log(populationPercentages(populations));
