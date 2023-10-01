'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const usersRouter = require('./auth/router.js');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/signup', usersRouter);
app.use('/signin', usersRouter);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is running on port ::', PORT);
    });
  },
};
