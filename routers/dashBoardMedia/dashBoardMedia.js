import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'
import { upload } from '../../helpers/middleware/init_multer'

import {
  getDashBoardMediaListController,
  createDashBoardMediaController,
  updateDashBoardMediaController,
  deleteDashBoardMediaController
} from '../../libs/dashBoardMedia/appLayer'

Router.post(
  '/getDashBoardMedia',
  verifyToken,
  makeCallback(getDashBoardMediaListController)
)
Router.post(
  '/createDashBoardMedia',
  verifyToken,
  upload.single('dashBoardMedias'),
  makeCallback(createDashBoardMediaController)
)

Router.put(
  '/updateDashBoardMedia',
  verifyToken,
  upload.single('dashBoardMedias'),
  makeCallback(updateDashBoardMediaController)
)

Router.delete(
  '/deleteDashBoardMedia',
  verifyToken,
  makeCallback(deleteDashBoardMediaController)
)

module.exports = Router
