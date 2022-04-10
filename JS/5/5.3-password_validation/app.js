'use strict';

// Create a simple password validation function that takes a password string as an argument.
// If the passwords length is more than 7 characters return “Strong”. If it is less than 7 characters long return “Weak.

// 1) Create a function that uses a if/else conditional expression.
const passwordValidationIf = (password) => {
  if (password.split('').length < 7) {
    return 'Weak';
  }
  return 'Strong';
};

// 2. Create a function that uses a ternary conditional expression.
const passwordValidationTernary = (password) => {
  return password.split('').length < 7 ? 'Weak' : 'Strong';
};

// 3. Create a function that uses a && logical operator.
const passwordValidationLogical = (password) => {
  return (password.split('').length < 7 && 'Weak') || 'Strong';
};

// Create an “advanced” password validation function that takes a password string as an argument.
// If the password length is more than 7 characters long and has at least one capital letter return “Very Strong”.If the password length in only 7 characters long return “Strong”

const advancePasswordValidator = (password) => {
  const arr = password.split('');
  return arr.length < 7
    ? 'Weak'
    : password !== password.toLowerCase()
    ? 'Vary staong'
    : 'Strong';
};

const weakPassword = '12345';
const strongPassword = 'ajf305lvvf44d';
const veryStrongPassword = 'k2FD4301LLSvv3345';

console.log(passwordValidationIf(weakPassword));
console.log(passwordValidationIf(strongPassword));

console.log(passwordValidationTernary(weakPassword));
console.log(passwordValidationTernary(strongPassword));

console.log(passwordValidationLogical(weakPassword));
console.log(passwordValidationLogical(strongPassword));

console.log(advancePasswordValidator(weakPassword));
console.log(advancePasswordValidator(strongPassword));
console.log(advancePasswordValidator(veryStrongPassword));
