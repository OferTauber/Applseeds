'use strict';

const userInputEl = document.querySelector('.user-input');
const btnEl = document.querySelector('.btn');
const outputEl = document.querySelector('.output');

btnEl.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = userInputEl.value;

  if (userInput * 1 < 18) {
    outputEl.textContent = 'You’re too young!';
    outputEl.classList.remove('green');
    outputEl.classList.add('red');
  } else {
    if (userInput > 120) {
      outputEl.textContent = "You can't be THAT old (-;";
      outputEl.classList.add('green');
      outputEl.classList.remove('red');
    } else {
      outputEl.textContent = 'You can drink';
      outputEl.classList.remove('green');
      outputEl.classList.remove('red');
    }
  }
});
