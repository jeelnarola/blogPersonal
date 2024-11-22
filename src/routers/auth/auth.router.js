const {Router} = require('express')
const { Register, Login, Logout } = require('../../controllers/auth/auth.controller')

const authRouter = Router()

authRouter.post('/register',Register)
authRouter.post('/login',Login)
authRouter.post('/logout',Logout)

module.exports = authRouter