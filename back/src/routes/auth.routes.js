const express = require('express');
const {register, login }   = require('../controllers/auth.controller.js');
const { registerValidator, loginValidator } = require('../validators/auth.validator.js');
const validateFields = require('../middlewares/validateFields.middleware.js');

const router = express.Router();

router.post('/register', registerValidator, validateFields, register );
router.post('/login', loginValidator, validateFields, login);

module.exports = router;