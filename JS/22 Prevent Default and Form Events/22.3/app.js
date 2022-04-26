'use strict';

const seacretLetterOuput = document.querySelector('.seacret-letter');
const massage = document.querySelector('.massage');
const guessed = document.querySelector('.guessed');
const playAgian = document.querySelector('.play-agian');

playAgian.addEventListener('click', game);

function game() {
  function winTheGame() {
    massage.classList.add('green');
    massage.classList.remove('red');
    massage.textContent = 'You win the game!';
    seacretLetterOuput.textContent = randomChar;
    playAgian.classList.remove('hidden');
    gameIsOn = false;
  }

  function wrongLetterGuessed(letter) {
    massage.classList.add('red');
    massage.classList.remove('green');
    if (!letter.match(/[a-z]/g)) {
      massage.textContent = `"${letter}" is not a valid letter!`;
    } else if (!alreadyGuessed.find((oldletter) => oldletter === letter)) {
      alreadyGuessed.push(letter);
      guessed.textContent = alreadyGuessed.join(', ');
      guessed.classList.remove('hidden');
      massage.textContent = `Wrong letter`;
    } else {
      massage.textContent = `"${letter}" already been guesed!`;
    }
  }

  const randomChar = Math.floor(Math.random() * 26 + 10).toString(36);
  const alreadyGuessed = [];
  playAgian.classList.add('hidden');
  seacretLetterOuput.textContent = '?';
  massage.textContent = 'Guess a letter';
  massage.classList.remove('green', 'red');
  let gameIsOn = true;
  guessed.textContent = 'dummy text';
  guessed.classList.add('hidden');

  window.addEventListener('keypress', (e) => {
    if (gameIsOn) {
      const userInput = e.key.toLowerCase();

      if (userInput === randomChar) {
        winTheGame();
        return;
      } else {
        wrongLetterGuessed(userInput);
      }
    }
  });

  // todo:
}

game();
