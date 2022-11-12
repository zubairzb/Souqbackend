import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'

import {
  getColourListController,
  createColourController,
  updateColourController,
  deleteColourController
} from '../../libs/colour/appLayer'

Router.post('/getColour', makeCallback(getColourListController))
Router.post('/createColour', verifyToken, makeCallback(createColourController))
Router.put('/updateColour', verifyToken, makeCallback(updateColourController))
Router.delete(
  '/deleteColour',
  verifyToken,
  makeCallback(deleteColourController)
)

module.exports = Router
