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
      require: true,
    },
    price: {
      type: Number,
      default: 0,
      require: true,
    },
    imageFileName: {
      type: String,
    },
    screen: {
      type: String,
      require: true,
    },
    cameraFront: {
      type: String,
      require: true,
    },
    cameraBack: {
      type: String,
      require: true,
    },
    batery: {
      type: String,
      require: true,
    },
    storage: {
      type: String,
      require: true,
    },
    processor: {
      type: String,
      require: true,
    },
    ram: {
      type: String,
      require: true,
    },
    isModifiable: {
      type: Boolean,
      default: true,
      immutable: true
    }
})

const Phone = moongose.model('Phone', phoneSchema)
module.exports = { Phone };