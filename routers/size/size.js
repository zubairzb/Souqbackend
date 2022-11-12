import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'

import {
  getSizeListController,
  createSizeController,
  updateSizeController,
  deleteSizeController
} from '../../libs/size/appLayer'

Router.post('/getSize', makeCallback(getSizeListController))
Router.post('/createSize', verifyToken, makeCallback(createSizeController))
Router.put('/updateSize', verifyToken, makeCallback(updateSizeController))
Router.delete('/deleteSize', verifyToken, makeCallback(deleteSizeController))

module.exports = Router
