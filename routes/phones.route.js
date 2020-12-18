"use strict"

const { Router } = require('express');
const { validarToken } = require('../middlewares/validate-token')

const PhonesController = require('../controllers/phones.controller');
// var auth = require('../middlewares/auth');
// var admin = require('../middlewares/admin');

const phoneRoute = Router();

phoneRoute.post('/phones', validarToken, PhonesController.CreatePhone);
phoneRoute.delete('/phones/:id', validarToken, PhonesController.DeletePhone);
phoneRoute.get('/phones', PhonesController.GetPhones);
phoneRoute.get('/phones/:id', PhonesController.GetPhoneById);

module.exports = phoneRoute;