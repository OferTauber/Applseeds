const fs = require('fs');
const path = require('path');
const express = require('express');

const publicDirectory = path.join(__dirname, '../public');

const app = express();

app.use(express.json());

app.get('/numbers', (req, res) => {
  void req;
  try {
    const rowData = fs.readFileSync(publicDirectory + '/numbers.json');
    const data = JSON.parse(rowData);

    res.send(data);
    console.log("success using 'Get'");
  } catch (e) {
    console.log(e);
  }
});

app.post('/numbers', (req, res) => {
  try {
    const rowData = fs.readFileSync(publicDirectory + '/numbers.json');
    const data = JSON.parse(rowData);
    data.push(req.body);
    fs.writeFileSync(publicDirectory + '/numbers.json', JSON.stringify(data));
    console.log("success using 'Post'");
    res.send('');
  } catch (e) {
    console.log(e);
  }
});

app.delete('/numbers', (req, res) => {
  try {
    const rowData = fs.readFileSync(publicDirectory + '/numbers.json');
    const data = JSON.parse(rowData);
    filterdData = data.filter(
      (item) => item.number + '' !== req.query.number + ''
    );
    fs.writeFileSync(
      publicDirectory + '/numbers.json',
      JSON.stringify(filterdData)
    );
    console.log("success using 'Delete'");
    res.send('');
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log('Server is up on pory 3000');
});
