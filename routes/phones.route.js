"use strict"

const { Router } = require("express")
const { validarToken } = require("../middlewares/validate-token")
const { check } = require("express-validator")
const { validateFields } = require("../middlewares/validate-fields")

const PhonesController = require("../controllers/phones.controller")
const phoneRoute = Router()

phoneRoute.post(
  "/phones",
  [
    check("name", "The name is required").not().isEmpty(),
    check("manufacturer", "The manufacturer is required").not().isEmpty(),
    check("description", "The description is required").not().isEmpty(),
    check("color", "The color is required").not().isEmpty(),
    check("price", "The price is required").not().isEmpty(),
    check("screen", "The screen is required").not().isEmpty(),
    check("cameraFront", "The Camera Front is required").not().isEmpty(),
    check("cameraBack", "The Camera Back is required").not().isEmpty(),
    check("batery", "The batery is required").not().isEmpty(),
    check("storage", "The storage is required").not().isEmpty(),
    check("processor", "The processor is required").not().isEmpty(),
    check("ram", "The ram is required").not().isEmpty(),
    validateFields,
  ],
  validarToken,
  PhonesController.CreatePhone
)
phoneRoute.post(
  "/phones/upload-image/:id",
  validarToken,
  PhonesController.UploadImagePhone
)
phoneRoute.put(
  "/phones/:id",
  [
    check("name", "The name is required").not().isEmpty(),
    check("manufacturer", "The manufacturer is required").not().isEmpty(),
    check("description", "The description is required").not().isEmpty(),
    check("color", "The color is required").not().isEmpty(),
    check("price", "The price is required").not().isEmpty(),
    check("screen", "The screen is required").not().isEmpty(),
    check("cameraFront", "The Camera Front is required").not().isEmpty(),
    check("cameraBack", "The Camera Back is required").not().isEmpty(),
    check("batery", "The batery is required").not().isEmpty(),
    check("storage", "The storage is required").not().isEmpty(),
    check("processor", "The processor is required").not().isEmpty(),
    check("ram", "The ram is required").not().isEmpty(),
    validateFields,
  ],
  validarToken,
  PhonesController.UpdatePhone
)
phoneRoute.delete("/phones/:id", validarToken, PhonesController.DeletePhone)
phoneRoute.get("/phones", PhonesController.GetPhones)
phoneRoute.get("/phones/:id", PhonesController.GetPhoneById)

module.exports = phoneRoute
