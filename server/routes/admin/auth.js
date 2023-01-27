const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const AuthController = require('../../controllers/auth');
const roleMiddleware = require('../../middleware/role');


router.post('/registration',
  [
    check('username', 'Неверное имя пользователя').notEmpty(),
    check('password', 'Пароль должен быть больше 4 символов').isLength({
      min: 4
    }),
  ],
  AuthController.registration);
router.post('/login', AuthController.login);
router.get('/users', AuthController.getUsers);
// router.get('/users', roleMiddleware(['ADMIN']), AuthController.getUsers);


module.exports = router;
