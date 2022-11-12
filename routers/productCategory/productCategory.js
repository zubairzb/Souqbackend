import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'

import {
  getProductCategoryListController,
  createProductCategoryController,
  updateProductCategoryController,
  deleteProductCategoryController
} from '../../libs/productCategory/appLayer'

Router.post(
  '/getProductCategory',
  makeCallback(getProductCategoryListController)
)
Router.post(
  '/createProductCategory',
  verifyToken,
  makeCallback(createProductCategoryController)
)
Router.put(
  '/updateProductCategory',
  verifyToken,
  makeCallback(updateProductCategoryController)
)
Router.delete(
  '/deleteProductCategory',
  verifyToken,
  makeCallback(deleteProductCategoryController)
)

module.exports = Router
