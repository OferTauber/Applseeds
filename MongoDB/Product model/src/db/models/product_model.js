const mongoose = require('mongoose');
const validator = require('validator');

const detailsSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    min: 0,
    default: 0,
  },
  images: {
    type: Array,
    validate(v) {
      if (v.langth < 2) throw new Error('Minimum of 2 images is required ');
      if (!v.every((url) => validator.isURL(url)))
        throw new Error('All "images" must be valid URLs');
    },

    required: true,
  },
  phone: {
    type: Number,
    validator(v) {
      if (!validator.isMobilePhone(v, 'he-IL'))
        throw new Error('Invalid phone');
    },
  },
  dateAdded: {
    type: Date,
    default: new Date(),
  },
});

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActiv: {
    type: Boolean,
  },
  details: {
    type: detailsSchema,
    required: true,
  },
});

const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActiv: {
    type: Boolean,
  },
  details: {
    type: detailsSchema,
    required: true,
  },
});

module.exports = Product;
