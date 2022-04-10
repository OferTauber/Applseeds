'use strict';
// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the
// given 'language':
// mandarin: 'MOST number of native speakers!'
// : '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Not in the top 5'

const langRank = (language) => {
  switch (language) {
    case 'Mandarin':
      console.log('MOST number of native speakers');
      break;
    case 'Spanish':
      console.log('2nd place in number of native speakers');
      break;
    case 'English':
      console.log('3rd place');
      break;
    case 'Hindi':
      console.log('Number 4');
      break;
    case 'Arabic':
      console.log('5th most spoken language');
      break;
    default:
      console.log('Not in the top 5');
  }
};

langRank('Mandarin');
langRank('Spanish');
langRank('English');
langRank('Hindi');
langRank('Arabic');
langRank('Klingon');
