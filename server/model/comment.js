const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
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
  rating: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Comment', commentSchema)
