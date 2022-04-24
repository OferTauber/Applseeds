'use struct';

const userInput = [];

function handelInput(evant) {
  const input = evant.target;
  if (input.nextElementSibling) {
    input.nextElementSibling.focus();
  } else {
    autoSubmit();
  }
}

function autoSubmit() {
  console.log('You havent write the function yet!!!');
}

function handelPast(evant) {
  function errorMassage(errorMessageText) {
    massage.textContent = errorMessageText;
    massage.style = 'color: red';
    inputs[0].value = '';
  }

  const pastedInput = evant.clipboardData.getData('text').split('');
  if (pastedInput.length < 6) {
    errorMassage('Code is too short!');
  } else if (pastedInput.length > 6) {
    errorMassage('Code is too long!');
  }

  inputs.forEach((input, index) => {
    input.value = pastedInput[index];
  });
  inputs[0].value = '0';
}

const inputs = [...document.querySelectorAll('.digit')];
const form = document.querySelector('form');
const massage = document.querySelector('h3');

inputs[0].addEventListener('paste', handelPast);
form.addEventListener('input', handelInput);

//! 12345
//! 123456
//! 1234567
