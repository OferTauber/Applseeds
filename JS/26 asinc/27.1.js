promiseIsGraterTen10 = (num, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) {
        resolve(`${num} is indeed grater then 10!`);
      } else {
        reject(`${num} is not grater then 10 :(`);
      }
    }, time * 1000);
  });
};

intervalRandPromise = (sec) => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const rand = Math.random();
      if (rand > 0.5) {
        resolve('heads! Yow win!');
      } else {
        reject('Tails! You losse!');
      }
    }, sec * 1000);
  });
};

promiseIsGraterTen10(11, 1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
promiseIsGraterTen10(9, 0.5)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

intervalRandPromise(0.3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('nice game'));

setInterval(() => {
  intervalRandPromise(0)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('nice game'));
}, 300);
