/*
--Delete the wrong answers--
1. Which of the following is/are strings?
------
------
c) '4'

2. Which of the following is/are numbers?
a) 4
b) 4.0
------
d) -4

3. Which of the following is/are booleans?
a) true
b) false
------

4. What is the result of 80 + 71.2?
a) 151.2
------
------

5. What is the result of "80" + 71.2?
------
------
c) "8071.2"

6. Does 100 + 30 produce a number or a string?
a) number
------

7. Does "100" + 30 produce a number or a string?
------
b)string


*/

//------Submit your answers under the question------//

//create three different ways to declare variables
let var1 = 1;
var var2 = 2;
const Var3 = 3;

console.log(var1, var2, Var3);

//declare a variable and reassign a value to it
let tempVal = 10;
tempVal = -10;

console.log(tempVal);

//create a variable and after that assign a string with its value being: He's got it!
let tempVal2 = 1;
console.log('tempVal2 =', tempVal2);

tempVal2 = "She's got it!";

console.log('tempVal2 =', tempVal2);
/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
*/

let bill = 100;
let tax = 0.17;
let final = bill * (1 + tax);

console.log('Final bill is: ', final);
// Round the number 50.6 to its nearest integer
let rounded = Math.round(50.6);

console.log(rounded);
//Create a variable that is undefined
let unDefined;

console.log(unDefined);
