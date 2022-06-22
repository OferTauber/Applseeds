const express = require('express');
require('./db/mongoose');
const productRouter = require('../src/routes/products_route');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/product', productRouter);

// app.get('/', (req, res) => {
//   res.send('test');
// });

app.listen(PORT, () => {
  console.log('Servrt is up and running on port ' + PORT);
});
