'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3001;
const { sequelize } = require('./src/auth/models');
const server = require('./src/server.js');

sequelize
  .sync()
  .then(() => {
    server.start(PORT);
  })
  .catch((e) => {
    console.error('Could not start server', e.message);
  });
