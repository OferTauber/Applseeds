// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

const makeAllCaps = (arr) => {
  return new Promise((resolve, rejact) => {
    if (!Array.isArray(arr)) rejact(`Invalid input of type ${typeof arr}`);

    const index = arr.findIndex((word) => typeof word !== 'string');
    if (index + 1) rejact(`${arr[index]} is an invalid word!`);

    const arr2 = arr.map((x) => x.toUpperCase());

    resolve(arr2);
  });
};

sortWords = (arr) => {
  return new Promise((resolve, rejact) => {
    if (!Array.isArray(arr)) rejact(`Invalid input of type ${typeof arr}`); //!
    const index = arr.findIndex((word) => typeof word !== 'string');
    if (index + 1) rejact(`${arr[index]} is an invalid word!`);

    resolve(arr.sort());
  });
};

makeAllCaps(['you', 'to', 'hellow'])
  .then(sortWords)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.warn(err);
  });

makeAllCaps(['you', 11, 'to', 'hellow'])
  .then(sortWords)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.warn(err);
  });

makeAllCaps('Hellow to you')
  .then(sortWords)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.warn(err);
  });
