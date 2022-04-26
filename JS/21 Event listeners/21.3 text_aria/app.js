'use strrict';

const candidateAnswer = {
  userInputEl: document.querySelector('textarea'),
  btnEl: document.querySelector('button'),
  massegeEl: document.querySelector('h3'),
  userInput: '',
  userInputSufficent: false,
  verifyUserInput(element) {
    this.userInput = element.value;
    this.userInputSufficent = this.userInput.length >= 100;
    if (this.userInputSufficent) {
      this.btnEl.classList.remove('off');
      this.massegeEl.textContent = '';
    } else {
      this.btnEl.classList.add('off');
    }
  },
  handelClick(e) {
    if (this.userInputSufficent) {
      this.massegeEl.textContent = '';
    } else {
      e.preventDefault();
      this.massegeEl.textContent = 'Your answer is too short';
    }
  },
};

candidateAnswer.userInputEl.addEventListener('input', (e) => {
  candidateAnswer.verifyUserInput(e.target);
});

candidateAnswer.btnEl.addEventListener('click', (e) => {
  candidateAnswer.handelClick(e);
});
