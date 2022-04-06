// every year that is divisible by 4 is a leap year except for the ones that are
// also divisible by 100, unless it is divisible by 400. Example: 2012 is a leap
// year 2100 is not But 2400 is.

isLeapYear = (year) => {
  if (year % 400 === 0) return true;
  return year % 100 !== 0 && year % 4 === 0;
};

printIsLeapYear = (year) => {
  if (isLeapYear(year)) {
    console.log('It is indeed a leap year');
  } else {
    console.log('This is not a leap year');
  }
};

printIsLeapYear(2012);
printIsLeapYear(2013);
printIsLeapYear(2100);
printIsLeapYear(2400);
