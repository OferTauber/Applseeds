const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));
const publicDirectory = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicDirectory));

app.listen(3000, () => {
  console.log('Server is up on pory 3000');
});
