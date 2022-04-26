'use strict';

const formEl = document.querySelector('form');
const userInputEl = document.querySelector('.num');
const container = document.querySelector('.container');
const maxNum = 30;

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  container.innerHTML = '';
  const numOfSmileys = e.target.children[0].value;

  if (!numOfSmileys || !Number(numOfSmileys)) {
    const errorMassage = document.createElement('h2');
    errorMassage.style = 'color: red';
    errorMassage.textContent = 'Invalid input';
    container.append(errorMassage);
  } else {
    let smileysStr = '';
    for (let i = 0; i < numOfSmileys * 1 && i < maxNum; i++) {
      smileysStr += `<img src="./smiley.png" alt="" class="smiley" />`;
    }
    if (numOfSmileys > maxNum) {
      smileysStr = `<h2>That's enough smileys for one day!</h2>` + smileysStr;
    }
    container.innerHTML = smileysStr;
  }
});

// console.log('123'.toNu);
