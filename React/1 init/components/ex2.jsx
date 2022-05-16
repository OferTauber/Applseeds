const data = ['hello', 'world'];
//! the output should be: “Hello World”

const number1 = 5;
const number2 = 6;
//! the output should be: 5 + 6 = 11

const string = 'I love React!';
//! the output should be : The string’s length is <display the length of the string>

const ex2 = (
  <div>
    <p>{`${data[0]} ${data[1]}`}</p>
    <p>{`${number1} + ${number2} = ${number1 + number2}`}</p>
    <p>{`The string length is ${string.length}`}</p>
  </div>
);

const exe2 = () => ex2;
export default exe2;
