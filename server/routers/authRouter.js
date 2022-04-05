const express = require('express');
const {
  registerUser,
  authorization,
  logout,
} = require('../controllers/auth.controller');
const { isValid } = require('../middlewares/isValid');

const authRouter = express.Router();

authRouter
  .post('/registration', isValid, registerUser)
  .post('/authorization', authorization)
  .get('/logout', logout);

module.exports = authRouter;
