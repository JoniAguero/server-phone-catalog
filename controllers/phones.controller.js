const { Phone } = require("../models/phone.model")

const CreatePhone = async (req, res) => {
  const phone = new Phone(req.body)

  try {
    const phoneSaved = await phone.save()
    res.json({
      ok: true,
      phone: phoneSaved,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error,
    })
  }
}

const DeletePhone = async (req, res = response) => {
  const phoneId = req.params.id
  const uid = req.uid

  try {
    const phone = await Phone.findById(phoneId)

    if (!phone) {
      return res.status(404).json({
        ok: false,
        msg: "Phone does not exist for that id",
      })
    }

    if (!uid) {
      return res.status(401).json({
        ok: false,
        msg: "You do not have the privilege to delete data",
      })
    }

    await Phone.findByIdAndDelete(phoneId)

    res.json({ ok: true })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    })
  }
}

const GetPhones = (req, res) => {
  Phone.find({}, (err, Phones) => {
    if (err) return res.status(400).send(err)
    res.status(200).send(Phones)
  })
}

const GetPhoneById = (req, res) => {
  Phone.findById({ _id: req.params.id }, (err, phoneSelected) => {
    if (err) return res.status(400).send(err)
    res.status(200).send(phoneSelected)
  })
}

module.exports = {
  CreatePhone,
  DeletePhone,
  GetPhones,
  GetPhoneById,
}
