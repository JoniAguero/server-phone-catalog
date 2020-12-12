"use strict"
const { Phone } = require('../models/phone.model');

const CreatePhone = async (req, res) => {

  const phone = new Phone( req.body );

  try {
      const phoneSaved = await phone.save();
      res.json({
          ok: true,
          phone: phoneSaved
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
          ok: false,
          msg: 'Ops! Something happend :('
      });
  }
}

const GetPhones = (req, res) => {
  Phone.find({}, (err, Phones) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(Phones)
  })
}

module.exports = {
  CreatePhone,
  GetPhones
}