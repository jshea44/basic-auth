'use strict';

const basicAuth = require('./middleware/basic.js');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { UsersModel } = require('./models');

beforeAll(async () => {
  await UsersModel.create({
    username: 'Test',
    password: await bcrypt.hash('admin', 10),
  });
});

describe('Tests for basic auth middleware', () => {
  test('Should parse basic auth header', () => {
    let encodedCredentials = base64.encode('Test:admin');
    const authHeader = {
      authorization: `Basic ${encodedCredentials}`,
    };
    const req = {
      path: '/signin',
      header: authHeader,
    };
    const res = null;
    const next = jest.fn();

    basicAuth(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
