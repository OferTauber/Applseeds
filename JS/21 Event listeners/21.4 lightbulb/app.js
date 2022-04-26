'use strict';

const lightbulb = {
  isOn: false,
  bulbEl: document.querySelector('.bulb'),
  toogleBulb() {
    this.isOn = !this.isOn;

    if (this.isOn) {
      this.bulbEl.classList.add('on');
    } else {
      this.bulbEl.classList.remove('on');
    }
  },
};

lightbulb.bulbEl.addEventListener('click', () => {
  lightbulb.toogleBulb();
});
