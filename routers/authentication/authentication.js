import express from 'express'
import makeCallback from '../../helpers/express-callback'
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware'
const Router = express.Router()

import {
  loginController,
  refreshTokenController,
  logoutController
} from '../../libs/authentication/appLayer'

Router.post('/login', makeCallback(loginController))
Router.post('/refreshToken', makeCallback(refreshTokenController))
Router.post('/logout', verifyToken, makeCallback(logoutController))

module.exports = Router
