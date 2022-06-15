const express = require('express');

const app = express();
const data = [1, 2, 3, 4, 5];

app.use(express.text());
app.use(express.json());

app.get('/', (req, res) => {
  try {
    void req;
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post('/', (req, res) => {
  try {
    const returnData = handelPost(req.body);
    if (!returnData) res.status(400).send('Number is alredy in the array');
    else res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.delete('/', (req, res) => {
  try {
    const { number } = req.query;
    const returnData = handelDelete(number);
    if (!returnData) res.status(400).send('Number is not in  the array');
    else res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.put('/', (req, res) => {
  try {
    const numberToRemove = req.query.number;
    const newNumber = req.body;
    const returnData = handelPut(numberToRemove, newNumber);
    if (typeof returnData === 'string') res.status(400).send(returnData);
    else res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.listen(3000, () => {
  console.log('Server is up on pory 3000');
});

const handelPost = (numAsString) => {
  const num = numAsString * 1;
  if (data.includes(num)) {
    return false;
  }
  data.push(num);
  return data;
};

const handelDelete = (numAsString) => {
  const num = numAsString * 1;
  const numIndex = data.findIndex((numFromArray) => numFromArray === num);
  if (-1 === numIndex) {
    return false;
  }
  data.splice(numIndex, 1);
  return data;
};

const handelPut = (numberToRemoveAsStr, newNumberAsStr) => {
  const numToRemove = numberToRemoveAsStr * 1;
  const newNum = newNumberAsStr * 1;
  const numToRemoveIndex = data.findIndex(
    (numFromArray) => numFromArray === numToRemove
  );

  if (-1 === numToRemoveIndex) return 'Number is not in the aray';
  if (data.includes(newNum)) return 'The new number is alredy within the array';

  data.splice(numToRemoveIndex, 1, newNum);

  return data;
};
