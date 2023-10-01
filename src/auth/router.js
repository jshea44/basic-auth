'use strict';

const bcrypt = require('bcrypt');
const { UsersModel } = require('./models');
const express = require('express');
const router = express.Router();

router.post('/signup', handleSignup);
router.post('/signin', handleSignin);

async function handleSignup(req, res) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await UsersModel.create(req.body);
    res.status(200).json(record);
  } catch (e) {
    res.status(403).send('Error Creating User');
  }
}

async function handleSignin(req, res) {
  try {
    const user = await UsersModel.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    } else {
      throw new Error('Invalid User');
    }
  } catch (error) {
    res.status(403).send('Invalid Login');
  }
}

module.exports = router;
