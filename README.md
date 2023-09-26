# Basic Auth

## Installation

`npm install`
Setup PORT:

```
PORT=3001
SQL_CONNECTION_STRING={SQL_database_link}
```

## PR Link

[PR Link](https://github.com/jshea44/basic-auth/pulls?q=is%3Apr+is%3Aclosed)

## Usage

Signup Request:

```
method: POST
route: /signup
json: {
  username: 'Test'
  password: 'admin'
}
```

Signin Request:

```
method: POST
route: /signin
headers: Authentication Basic {
  username: 'Test'
  password: 'admin'
}
```

## Contributors

- Joshua Shea
- Jacob Knaack
