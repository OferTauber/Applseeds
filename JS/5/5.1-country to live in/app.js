'use strict';

const countryToLiveIn = (language, isIsland, population, country) => {
  if (language.toLowerCase() === 'english' && !isIsland && population < 50) {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} dose not fit your criteria`);
  }
};

countryToLiveIn('English', true, 60, 'UK');
countryToLiveIn('English', false, 380, 'USA');
countryToLiveIn('English', false, 35, 'Australia');

// If yours is the right country, log a string like this: 'You should live in Finland. If not, log 'Finland does not meet
// your criteria'.
