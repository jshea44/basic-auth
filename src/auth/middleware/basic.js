'use strict';

const base64 = require('base-64');

const basicAuth = (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(' '); // ['Basic', 'am9objpmb28=']
  let encodedString = basicHeaderParts.pop(); // am9objpmb28=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password
  req.body.username = username;
  req.body.password = password;
  next();
};

module.exports = basicAuth;
