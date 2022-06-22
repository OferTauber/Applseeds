const express = require('express');
const Product = require('../db/models/product_model');

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const { _id } = req.query;
  let products;
  try {
    if (_id) {
      products = await Product.findById(_id);
    } else {
      products = await Product.find({});
    }

    if (!products) res.status(404);
    res.send(products);
  } catch (e) {
    res.status(400).send(e);
  }
});

productRouter.get('/active', async (req, res) => {
  try {
    const products = await Product.find({ isActiv: true });
    res.send(products);
  } catch (e) {
    res.status(400).send(e);
  }
});

productRouter.get('/price_range', async (req, res) => {
  const { min, max } = req.query;
  try {
    const products = await Product.find({
      'details.price': {
        $gte: min,
        $lte: max,
      },
    });
    res.send(products);
  } catch (e) {
    res.status(400).send(e);
  }
});

productRouter.get('/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const products = await Product.find({ name });
    if (!products) res.status(404);
    res.send(products);
  } catch (e) {
    res.status(400).send(e);
  }

  res.send('test');
});

productRouter.post('/', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

productRouter.put('/set_active/:_id', async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  try {
    const product = await Product.findByIdAndUpdate(
      _id,
      { isActiv: true },
      {
        returnDocument: 'after',
      }
    );
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

productRouter.put('/set_inactive/:_id', async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  try {
    const product = await Product.findByIdAndUpdate(
      _id,
      { isActiv: false },
      {
        returnDocument: 'after',
      }
    );
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

productRouter.delete('/delete/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const retVal = await Product.deleteMany({ _id });
    res.send(retVal);
  } catch (e) {
    res.status(400).send(e);
  }
});

productRouter.delete('/delete_all', async (req, res) => {
  try {
    const retVal = await Product.deleteMany({});
    res.send(retVal);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = productRouter;
