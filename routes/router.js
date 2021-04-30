const express = require('express');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const User = require('./../model/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.userpassword, salt);

    // Check if user is already exists in the database
    const newUser = await User.findOne({ email: req.body.useremail });
    if (newUser)
      return res.status(400).json({
        message: 'User already exists in the database'
      });

    // console.log(newUser);

    const user = await  User.create({
      name: req.body.username,
      email: req.body.useremail,
      password: hashPassword
    });

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: process.env.JWT_EXPIRES_IN
    // });

    res.render('successRegister', {
      value: 'Registered'
    });

  } catch (err) {
    res.status(401).json({
      status: 'Fail',
      message: err
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const email = req.body.useremail;
    const password = req.body.userpassword;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: 'This email does not exists'
      });
    }

    if (!password || !email) {
      return res.send('please provide a email or password');
    }

    const validPass = await user.checkPassword(password, user.password);

    if (!validPass) {
      return res.status(401).json({
        message: 'Your password in incorrect'
      });
    }

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: process.env.JWT_EXPIRES_IN
    // });
    // res.status(200).json({
    //   message: 'You have successfully logged in'
    // })

    res.render('loginvalue', {
      username: email
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
});
module.exports = router;
