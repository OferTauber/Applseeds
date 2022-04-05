// 1. Write a function named `tellFortune` that takes 4 parameters:
// jobTitle, location, partnerName, numberOfChildren
// Based on this output the function returns a string with this format:
// `You will be a programmer in Tel Aviv and married to Sharon with 2 children.

const tellFortune = function (
  jobTitle,
  location,
  partnerName,
  numberOfChildren
) {
  return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children`;
};

console.log(tellFortune('Programer', 'Tel-Aviv', 'Maya', 1));
