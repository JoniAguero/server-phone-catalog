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
    cameraFront: {
      type: String
    },
    cameraBack: {
      type: String
    },
    batery: {
      type: String
    },
    storage: {
      type: String
    },
    processor: {
      type: String
    },
    ram: {
      type: String
    },
    isModifiable: {
      type: Boolean,
      default: true,
      immutable: true
    }
})

const Phone = moongose.model('Phone', phoneSchema)
module.exports = { Phone };