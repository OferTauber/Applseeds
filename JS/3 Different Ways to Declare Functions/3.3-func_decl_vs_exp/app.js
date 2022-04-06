// 1. The world population is 7900 million people. Create a
// function declaration called 'percentageOfWorld1' which
// receives a 'population' value, and returns the percentage of
// the world population that the given population represents.
// For example, China has 1441 million people, so it's about
// 18.2% of the world population.

// 2. To calculate the percentage, divide the given 'population'
// value by 7900 and then multiply by 100
const world_pop = 7900;

percentageOfWorld1 = (population) => (population / world_pop) * 100;

displayFloor = (num) => Math.floor(num * 100) / 100;
// 3. Call 'percentageOfWorld1' for 3 populations of countries
// of your choice, store the results into variables, and log
// them to the console

const china_pop = percentageOfWorld1(1441);
const israel_pop = percentageOfWorld1(9);
const egypt_pop = percentageOfWorld1(105);

console.log(
  `China's population makes up ${displayFloor(
    china_pop
  )}% of the world's population`
);
console.log(
  `Israels's population makes up ${displayFloor(
    israel_pop
  )}% of the world's population`
);
console.log(
  `Egypt's population makes up ${displayFloor(
    egypt_pop
  )}% of the world's population`
);

// 4. Create a function expression which does the exact same
// thing, called 'percentageOfWorld2', and also call it with 3
// country populations (can be the same populations)
const percentageOfWorld2 = (population) => (population / world_pop) * 100;

const india_pop = displayFloor(percentageOfWorld1(1352));
const nigeria_pop = displayFloor(percentageOfWorld1(211));
const hong_kong_pop = displayFloor(percentageOfWorld1(7));

console.log(
  `India's population makes up ${india_pop}% of the world's population`
);
console.log(
  `Nigeria's population makes up ${nigeria_pop}% of the world's population`
);
console.log(
  `Hong Kong's population makes up ${hong_kong_pop}% of the world's population`
);
