'use  strict';

const data = [
  {
    name: 'John',
    birthday: '1-1-1995',
    favoriteFoods: {
      meats: ['hamburgers', 'sausages'],
      fish: ['salmon', 'pike'],
    },
  },
  {
    name: 'Mark',
    birthday: '10-5-1980',
    favoriteFoods: {
      meats: ['hamburgers', 'steak', 'lamb'],
      fish: ['tuna', 'salmon', 'barracuda'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['ham', 'chicken'],
      fish: ['pike'],
    },
  },
  {
    name: 'Thomas',
    birthday: '1-10-1990',
    favoriteFoods: {
      meats: ['bird', 'rooster'],
      fish: ['salmon'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['hamburgers', 'lamb'],
      fish: ['anchovies', 'tuna'],
    },
  },
];

// We are not getting the data as we want it. We are going to need to massage the data.
// Create separate functions for each questions below:
// 1. Create a function that returns all the names from the array.
const getNames = (arr) => arr.map((obj) => obj.name);

console.log(getNames(data));

// 2. Create a function that returns all the objects that are born before 1990.
const isOld = (person) => {
  const birthdayArr = person.birthday.split('-');
  return birthdayArr[2] * 1 <= 1990;
};

const getOlds = (arr) => {
  const oldsOnly = [];

  arr.forEach((person) => {
    if (isOld(person)) oldsOnly.push(person);
  });

  return oldsOnly;
};

console.log(getOlds(data));

// 3. Create a function that returns an object of all the different foods from all the objects as the key and the number of times that food is present in all the objects as the value.
const countFoods = (arr) => {
  const foods = {};

  arr.forEach((person) => {
    for (const foodCategory in person.favoriteFoods) {
      person.favoriteFoods[foodCategory].forEach((dish) => {
        if (foods[dish]) {
          foods[dish]++;
        } else {
          foods[dish] = 1;
        }
      });
    }
  });

  return foods;
};

console.log(countFoods(data));
