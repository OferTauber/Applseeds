// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const obj = {
  name: 'John Doe',
  printName() {
    console.log(this.name);
  },
  printNameDelayUsingThat() {
    const that = this;
    setTimeout(function () {
      that.printName();
    }, 250);
  },
  printNameDelayUsingApply() {
    const printNameFunc = this.printName.bind(this);
    setTimeout(function () {
      printNameFunc();
    }, 500);
  },
  printNameDelayUsingArrow() {
    setTimeout(() => {
      this.printName();
    }, 750);
  },
};

obj.printName();
obj.printNameDelayUsingThat();
obj.printNameDelayUsingApply();
obj.printNameDelayUsingArrow();
