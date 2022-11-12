import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'

import {
  getStatesListController,
  createStatesController,
  updateStatesController,
  deleteStatesController
} from '../../libs/states/appLayer'

Router.post('/getStates', makeCallback(getStatesListController))
Router.post('/createState', verifyToken, makeCallback(createStatesController))
Router.put('/updateState', verifyToken, makeCallback(updateStatesController))
Router.delete('/deleteState', verifyToken, makeCallback(deleteStatesController))

module.exports = Router
