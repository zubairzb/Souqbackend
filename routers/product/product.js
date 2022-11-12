import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'
import { upload, uploadMultiple } from '../../helpers/middleware/init_multer'

import {
  getProductListController,
  createProductController,
  updateProductController,
  deleteProductController
} from '../../libs/product/appLayer'

Router.post('/getProduct', makeCallback(getProductListController))
Router.post(
  '/createProduct',
  uploadMultiple,
  makeCallback(createProductController)
)

Router.put(
  '/updateProduct',
  verifyToken,
  uploadMultiple,
  makeCallback(updateProductController)
)

Router.delete(
  '/deleteProduct',
  verifyToken,
  makeCallback(deleteProductController)
)

module.exports = Router
