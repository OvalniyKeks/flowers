const User = require('../model/user')
const Role = require('../model/role')
const bcrypt = require('bcryptjs');
const {
    validationResult
} = require('express-validator')
const jwt = require('jsonwebtoken')

const {
    secret
} = require("../config")
const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {
        expiresIn: '24h'
    })
}

module.exports = class AuthApi {

    static async registration(req, res) {
      // const role = new Role({
      //   value: "ADMIN"
      // })
      // await role.save()

      // res.status(200).json({
      //     success: true,
      //     message: 'Пользователь создан'
      // })
        try {
            // Check errors (errors from middleware)
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: 'Ошибка при регистрации',
                    errors
                })
            }

            // Get Data User
            const {
                username,
                password
            } = req.body

            // Find this User
            const candidate = await User.findOne({
                username
            })

            if (candidate) {
                return res.status(400).json({
                    message: 'Пользователь с таким именем существует'
                })
            }

            // Hash Paswword
            const hashPassword = bcrypt.hashSync(String(password), 7);

            // Get Role
            const userRole = await Role.findOne({
                value: "USER"
            })

            if (!userRole) {
              const role = new Role({
                value: 'USER'
              })
              await role.save()
            }

            // Create object User
            const user = new User({
                username,
                password: hashPassword,
                roles: [userRole.value]
            })

            // Save user to Database
            await user.save()


            res.status(200).json({
                success: true,
                message: 'Пользователь создан'
            })
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }

    static async login(req, res) {
        try {

            const {
                username,
                password
            } = req.body
            const user = await User.findOne({
                username
            })
            if (!user) {
                return res.status(400).json({
                    message: `Пользователь с таким ${username} существует`
                })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({
                    message: `Введен неверный пароль`
                })
            }

            const token = generateAccessToken(user._id, user.roles)

            res.status(200).json({
                token
            })
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }
    static async getUsers(req, res) {
        try {
            const users = await User.find()

            res.json({
                users
            })
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

}
