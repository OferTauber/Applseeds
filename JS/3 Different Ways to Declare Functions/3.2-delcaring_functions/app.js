// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'.
// Based on this input, the function returns a string with this
// format: 'Finland has 6 million people and its capital city is Helsinki'

function describeCountry(country, population_millions, capitalCity) {
  return `${country} has ${population_millions} million people and its capital city is ${capitalCity}`;
}

// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different variables,
// and log them to the console.
const israel = describeCountry('Israel', 10, 'Jerusalem');
const australia = describeCountry('Australia', 35, 'Canberra');
const india = describeCountry('India', 1400, 'New Delhi');

console.log(israel);
console.log(australia);
console.log(india);
