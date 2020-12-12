const debug = require('debug')('back-end')
const cors = require('cors')
const logger = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const phonesRoute = require('./routes/phones.route');

const errorHandler = require('./_helpers/error-handler')
const fatalErrorHandler = require('./_helpers/fatal-error-handler')

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI)

const app = express();
app.use(logger('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', [phonesRoute]);

app.use('/', (req, res) => {
  res.send(`
  <div style="width: 100%; text-align: center">
    <h1 style >Hello :) , to make sure you use the API, use /api/phones </h1>
  </div>`);
});

app.use(errorHandler)
app.use(fatalErrorHandler)

process.on('uncaughtException', fatalErrorHandler)
process.on('unhandledRejection', fatalErrorHandler)

module.exports = app;