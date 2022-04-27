//? Question 1:
//? In your own words what will this point to and why?(Note
//? this is the global scope)

console.log(this);

//! As the function "console.log"  was called from the global scope - it will print it context:
//! If the script is activated in Chrome (via HTML) - it will print the window.
//! If it was activated using Node - ther is no window, and so the global scope ("{}") will pe printed.

//
//? Question 2:
//? a. In your own words what will this point to and why.
//? b. How can you fix this code.
const myObj = {
  name: 'Timmy',
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

//! Since "greet" is an arrow function - it won't keep its context to it's containing object, and the context will be reset whenever it get call.
//! To fix that - I've changed it to be a regular function

//*
//? Question 3:
//? In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};

//! This piece of code does not print anything because it only includes a function declaration but does not include an activation. Activation of the function (from the general scope) will create the same result as question 1.

//*
//?Question 4:
//? In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//! Activation of the function (from the general scope) will create the same result as question 1.

//*
//? Question 5:
//? a. In your own words what will this point to and why.
//? b. How can you fix this code.
document.querySelector('.element').addEventListener('click', () => {
  console.log(this);
});

//! The function will show an error message because the EventListener has not been set to which event to watch.
//! When fixing this bug - the function is called in the general scope and therefore "this" refers to it (to the window if it is in the browser, or to {} if it is in Node)
