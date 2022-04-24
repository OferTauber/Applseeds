'use strict';

var lastDigit = function (str1, str2) {
  const lastDigStr1 = 1 * str1.charAt(str1.length - 1);
  if (str2 === '0') return 1;

  // return Math.pow(lastDigStr1, (str2 * 1) % 12) % 10;

  switch (lastDigStr1) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      switch ((str2 * 1) % 4) {
        case 0:
          return 6;
        case 1:
          return 2;
        case 2:
          return 4;
        case 3:
          return 8;
      }
    case 3:
      switch ((str2 * 1) % 4) {
        case 0:
          return 1;
        case 1:
          return 3;
        case 2:
          return 9;
        case 3:
          return 7;
      }
    case 4:
      switch ((str2 * 1) % 2) {
        case 0:
          return 6;
        case 1:
          return 4;
      }
    case 5:
      switch ((str2 * 1) % 2) {
        case 0:
          return 0;
        case 1:
          return 5;
      }
    case 6:
      return 6;
    case 7:
      switch ((str2 * 1) % 4) {
        case 0:
          return 1;
        case 1:
          return 7;
        case 2:
          return 9;
        case 3:
          return 3;
      }
    case 8:
      switch ((str2 * 1) % 4) {
        case 0:
          return 6;
        case 1:
          return 8;
        case 2:
          return 4;
        case 3:
          return 2;
      }
    case 9:
      switch ((str2 * 1) % 2) {
        case 0:
          return 1;
        case 1:
          return 9;
      }
  }
};
