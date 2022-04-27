'use strict';

function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 2; i >= 0; i--) {
    for (let j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] +=
        pyramid[i + 1][j] > pyramid[i + 1][j + 1]
          ? pyramid[i + 1][j]
          : pyramid[i + 1][j + 1];
    }
  }

  return pyramid[0][0];
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
//  23, "should work for small pyramids");
console.log(
  longestSlideDown([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ])
);
//  1074, "should work for medium pyramids");

// var lastDigit = function (str1, str2) {
//   const lastDigStr1 = 1 * str1.charAt(str1.length - 1);
//   if (str2 === '0') return 1;

//   switch (lastDigStr1) {
//     case 0:
//       return 0;
//     case 1:
//       return 1;
//     case 2:
//       switch ((str2 * 1) % 4) {
//         case 0:
//           return 6;
//         case 1:
//           return 2;
//         case 2:
//           return 4;
//         case 3:
//           return 8;
//       }
//     case 3:
//       switch ((str2 * 1) % 4) {
//         case 0:
//           return 1;
//         case 1:
//           return 3;
//         case 2:
//           return 9;
//         case 3:
//           return 7;
//       }
//     case 4:
//       switch ((str2 * 1) % 2) {
//         case 0:
//           return 6;
//         case 1:
//           return 4;
//       }
//     case 5:
//       return 5;
//     case 6:
//       return 6;
//     case 7:
//       switch ((str2 * 1) % 4) {
//         case 0:
//           return 1;
//         case 1:
//           return 7;
//         case 2:
//           return 9;
//         case 3:
//           return 3;
//       }
//     case 8:
//       switch ((str2 * 1) % 4) {
//         case 0:
//           return 6;
//         case 1:
//           return 8;
//         case 2:
//           return 4;
//         case 3:
//           return 2;
//       }
//     case 9:
//       switch ((str2 * 1) % 2) {
//         case 0:
//           return 1;
//         case 1:
//           return 9;
//       }
//   }
// };

// for (let i = 0; i < 10; i++) {
//   for (let j = 30; j < 34; j++) {
//     const exp = (Math.pow(i, j) % 10) + '';
//     const res = lastDigit(i + '', j + '');
//     if (exp != res) {
//       console.log(`${i}^${j} shuld hav been ${exp} but turne to be ${res}`);
//     }
//   }
// }

// console.log(lastDigit('1', '1'));

// function minUmbrellas2(weather) {
//   const data = {
//     currentlyAt: 'home',
//     gowingTo: 'work',
//     umbrellasAt: {
//       home: 0,
//       work: 0,
//     },
//     // umbrellaAtHome: 0,
//     // umbrellaAtWork: 0,
//     count: 0,
//   };

//   while (weather[0]) {
//     const nowWeather = weather.shift();
//     if (nowWeather === 'rainy' || nowWeather === 'thunderstorms') {
//       if (data.umbrellasAt[data.currentlyAt] === 0) {
//         // data.count++;
//         data.umbrellasAt[data.gowingTo]++;
//       } else {
//         data.umbrellasAt[data.currentlyAt]--;
//         data.umbrellasAt[data.gowingTo]++;
//       }
//     }

//     const tempSwap = data.currentlyAt;
//     data.currentlyAt = data.gowingTo;
//     data.gowingTo = data.currentlyAt;
//   }

//   return data.umbrellasAt.home + data.umbrellasAt.work;
// }
// function minUmbrellas(weather) {
//   const data = {
//     here: 0,
//     thear: 0,

//     count: 0,
//     swap() {
//       const temp = this.here;
//       this.here = this.thear;
//       this.thear = temp;
//     },
//   };

//   while (weather[0]) {
//     const nowWeather = weather.shift();
//     if (nowWeather === 'rainy' || nowWeather === 'thunderstorms') {
//       if (data.here !== 0) {
//         // data.count++;
//         data.here--;
//       }
//       data.thear++;
//     }
//     data.swap();
//   }

//   return data.here + data.thear;
// }

// console.log(minUmbrellas(['cloudy'])); //, 0, "wrong answer for one value in weather array");
// console.log(minUmbrellas(['rainy', 'rainy', 'rainy', 'rainy'])); //, 1, "wrong answer for always rainy.");
// console.log(minUmbrellas(['overcast', 'rainy', 'clear', 'thunderstorms'])); //, 2, "wrong answer for 2 dry mornings and 2 rainy afternoons.");
