const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: false
  },
  author_name: {
    type: String,
    default: 'pop boy'
  },
  author_image: {
    type: String,
    default: 'http://localhost:3000/card_4.png'
  },
  description: {
    type: String,
    required: false
  },
  likes: {
    type: String,
    required: false
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Post', postSchema)
