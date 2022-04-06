// 1. Declare a variable 'numSiblings' based on a prompt input
// like this:
// prompt('How many siblings do you have?');

numSiblings = prompt('How many siblings do you have?');

// 2. If you have one sibling, log to the console '1 sibling!'
// (use loose equality == for now)

//1 3. Use an else-if block to log 'More than 1 sibling' in case
// 'numSiblings' is greater than 1

// 4. Use an else block to log 'No siblings' (this block will be
// executed when 'numSiblings' is 0 or any other value)

/*
if (numSiblings == 1) {
  console.log(`1 sibling`);
} else if (numSiblings < 1) {
  console.log(`No sibling`);
} else {
  console.log(`More than 1 sibling`);
}
*/

// 5. Test the code with different values of 'numSiblings',
// including 1 and 0.

// 6. Change == to ===, and test the code again, with the
// same values of 'numSiblings'. Notice what happens when
// there is exactly 1 sibling! Why is this happening?

if (~~numSiblings === 1) {
  console.log(`1 sibling`);
} else if (1 * numSiblings < 1) {
  console.log(`No sibling`);
} else {
  console.log(`More than 1 sibling`);
}
// 7. Finally, convert 'numSibling' to a number, and watch
// what happens now when you input 1.

// 8. Reflect on why we should use the === operator and
// type conversion in this situation.

// Because JS allows us to implement any type of data in a variable - using the '===' operator  will help us detect incorrect placement of data to a variable, especially cases of comparing a variable to "true" or "false". In case we have replaced the value of a Boolean variable, and we check if it is not true using '==' - there is a risk of undefined behavior, while using '===' will always have a stable behavior
