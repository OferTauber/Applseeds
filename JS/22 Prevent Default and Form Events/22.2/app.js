'use strict';

const imgBox = document.querySelector('div');
const checkbox = document.querySelector('input');

checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    imgBox.classList.remove('hidden');
  } else {
    imgBox.classList.add('hidden');
  }
});
