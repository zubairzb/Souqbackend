import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'

import {
  getProductSubCategoryListController,
  createProductSubCategoryController,
  updateProductSubCategoryController,
  deleteProductSubCategoryController
} from '../../libs/productSubCategory/appLayer'

Router.post(
  '/getProductSubCategory',
  makeCallback(getProductSubCategoryListController)
)
Router.post(
  '/createProductSubCategory',
  verifyToken,
  makeCallback(createProductSubCategoryController)
)
Router.put(
  '/updateProductSubCategory',
  verifyToken,
  makeCallback(updateProductSubCategoryController)
)
Router.delete(
  '/deleteProductSubCategory',
  verifyToken,
  makeCallback(deleteProductSubCategoryController)
)

module.exports = Router
