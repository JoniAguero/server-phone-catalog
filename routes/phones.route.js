"use strict"

const { Router } = require('express');

var PhonesController = require('../controllers/phones.controller');
// var auth = require('../middlewares/auth');
// var admin = require('../middlewares/admin');

var phoneRoute = Router();

phoneRoute.post('/phones', PhonesController.CreatePhone);
phoneRoute.get('/phones', PhonesController.GetPhones);

module.exports = phoneRoute;