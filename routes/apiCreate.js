const express = require('express');
const Api = require('./../model/apiModel');

const router = express.Router();

router
  .route('/')
  .post(async (req, res) => {
    try {
      const { name, age, work, address } = req.body;
      const newData = await Api.create({
        name,
        age,
        work,
        address
      });

      res.status(201).json({
        status: 'success',
        data: newData
      });
    } catch (err) {
      res.status(401).json({
        status: 'fail',
        message: err
      });
    }
  })
  .get(async (req, res) => {
    try {
      const users = await Api.find();
      res.status(200).json({
        data: {
          users
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'Fail',
        message: error
      });
    }
  });

module.exports = router;
