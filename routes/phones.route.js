"use strict"

const { Router } = require('express');
const { validarToken } = require('../middlewares/validate-token')

const PhonesController = require('../controllers/phones.controller');
const phoneRoute = Router();

phoneRoute.post('/phones', validarToken, PhonesController.CreatePhone);
phoneRoute.post('/phones/upload-image/:id', validarToken, PhonesController.UploadImagePhone);
phoneRoute.put('/phones/:id', validarToken, PhonesController.UpdatePhone);
phoneRoute.delete('/phones/:id', validarToken, PhonesController.DeletePhone);
phoneRoute.get('/phones', PhonesController.GetPhones);
phoneRoute.get('/phones/:id', PhonesController.GetPhoneById);

module.exports = phoneRoute;