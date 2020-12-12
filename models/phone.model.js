const moongose = require('mongoose');

const phoneSchema = moongose.Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    manufacturer: {
      type: String,
      required: true,
      maxlength: 20
    },
    description: {
      type: String,
      required: true
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      default: 0
    },
    imageFileName: {
      type: String
    },
    screen: {
      type: String
    },
    processor: {
      type: String
    },
    ram: {
      type: Number
    }
})

const Phone = moongose.model('Phone', phoneSchema)
module.exports = { Phone };