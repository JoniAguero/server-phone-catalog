const { Phone } = require("../models/phone.model")
const awsUploadImage = require("../utils/aws-upload-image");
const { v4: uuidv4 } = require("uuid");

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

  const uid = req.uid

  try {
    const phone = await Phone.findById(req.params.id)

    if (!phone) {
      return res.status(404).json({
        ok: false,
        msg: "Phone does not exist for that id",
      })
    }

    if (!uid || !phone.isModifiable) {
      return res.status(401).json({
        ok: false,
        msg: "You do not have the privilege to delete data",
      })
    }

    await Phone.findByIdAndDelete(req.params.id)

    res.json({ ok: true })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    })
  }
}

const UpdatePhone = async (req, res = response) => {

  const uid = req.uid

  try {
    const phone = await Phone.findById(req.params.id)

    if (!phone) {
      return res.status(404).json({
        ok: false,
        msg: "Phone does not exist for that id",
      })
    }

    if (!uid || !phone.isModifiable) {
      return res.status(401).json({
        ok: false,
        msg: "You do not have the privilege to edit data",
      })
    }

    await Phone.findByIdAndUpdate(req.params.id, req.body)

    res.json({ ok: true })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    })
  }
}

const UploadImagePhone = async (req, res = response) => {

  const file = req.files.file
  const { mimetype } = await file;
  const extension = mimetype.split("/")[1];
  const imageName = `phones/${uuidv4()}.${extension}`;
  const fileData = file.data;

  try {
    const result = await awsUploadImage(fileData, imageName);
    res.status(200).send({
      ok: true,
      urlImage: result
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error,
    })
  }
}

const GetPhones = (req, res) => {
  Phone.find({}, (err, phones) => {
    if (err) return res.status(400).send(err)
    res.status(200).send(phones)
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
  UpdatePhone,
  UploadImagePhone,
  GetPhones,
  GetPhoneById,
}
