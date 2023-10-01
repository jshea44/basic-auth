'use strict';

const app = require('../src/server.js');

describe('Testing basic auth', () => {
  test('Registering a user', async () => {
    let response = await req.post('/signup').send({
      username: 'Test',
      password: 'admin',
    });
    expect(response.status).toBe(201);
    expect(response.body.username).toBe('Test');
  });
});
