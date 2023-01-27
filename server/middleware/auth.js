const jwt = require('jsonwebtoken')
const { secret } = require('../config')
module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    
    try {
        const bearerToken = req.headers.authorization
        if (!bearerToken) {
            return res.status(404).json({
                message: 'Ошибка токена'
            })
        }
        const token = bearerToken.split(' ')[1]
        if (!token) {
            return res.status(403).json({message: 'Пользователь не авторизован'})
        }
        const decodeData = jwt.verify(token, secret)
        req.user = decodeData
        next()
        
    } catch (e) {
        console.log(e);
        return res.status(403).json({message: 'Пользователь не авторизован'})
    }
}
