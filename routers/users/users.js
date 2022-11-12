import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'

import {
  getUsersListController,
  createUsersController,
  updateUsersController,
  deleteUsersController
} from '../../libs/users/appLayer'

Router.post('/getUsers', verifyToken, makeCallback(getUsersListController))
Router.post('/createUser', makeCallback(createUsersController))
Router.put('/updateUser', verifyToken, makeCallback(updateUsersController))
Router.delete('/deleteUser', verifyToken, makeCallback(deleteUsersController))

module.exports = Router
