const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(PORT, () => {
  console.log('Servrt is up and running on port ' + PORT);
});
