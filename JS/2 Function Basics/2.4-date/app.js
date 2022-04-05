// Find how to get the following:
// 1. Name of the current day e.g. Sunday
const today = new Date().toLocaleString('en-us', {
  weekday: 'long',
});
console.log(today);

const today_he = new Date().toLocaleString('he', {
  weekday: 'long',
});
console.log(today_he);
/*
const today = new Date('June 6, 1987 01:15:00').toLocaleString('en-us', {
  weekday: 'long',
}); 
console.log(today);
*/

// 2. Current day of the month e.g. 31
const day_of_month = new Date().getDate();
console.log(day_of_month);

// 3. Current month e.g January
const month = new Date().toLocaleString('en-us', { month: 'long' });
console.log(month);

const month_he = new Date().toLocaleString('he', { month: 'long' });
console.log(month_he);

const month_india = new Date().toLocaleString('hi', { month: 'long' });
console.log(month_india);

// 5. Current Year e.g 2021
const year = new Date().getFullYear();
console.log(year);
