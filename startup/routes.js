const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoute = require('./../routes/router');
const apiRoute = require('./../routes/apiCreate');

module.exports = function(app) {
  app.use(express.static('public'));
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/', userRoute);
  app.use('/api/v1/appuser', apiRoute);
};
