'use strict';

const fontSizeManege = {
  text: document.querySelector('p'),
  fontSize: 16,
  updateFontSize(update) {
    this.fontSize += update;

    if (this.fontSize > 100 || this.fontSize < 6) {
      this.fontSize -= update;
    }

    // if (this.fontSize < 99 && this.fontSize > 7) {
    //   this.fontSize += update;
    // }
    this.text.setAttribute('style', `font-size: ${this.fontSize}px`);
  },
  decrease: document.querySelector('.decrease'),
  increase: document.querySelector('.increase'),
  stapSise: 5,
};

fontSizeManege.decrease.addEventListener('click', (e) => {
  void e;
  fontSizeManege.updateFontSize(-fontSizeManege.stapSise);
});

fontSizeManege.increase.addEventListener('click', (e) => {
  void e;
  fontSizeManege.updateFontSize(fontSizeManege.stapSise);
});

// console.log(fontSizeManege.text);
// fontSizeManege.text.setAttribute('style', 'font-size: 30px');
