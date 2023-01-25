const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: String,
    required: false
  },
  reviews: {
    type: String,
    required: false
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', productSchema)
