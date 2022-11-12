import {
  createProductSubCategoryUseCase,
  getProductSubCategoryListUseCase,
  updateProductSubCategoryUseCase,
  deleteProductSubCategoryUseCase
} from '../useCases/index.js'

import {
  getProductSubCategoryControllerFunction,
  createProductSubCategoryControllerFunction,
  updateProductSubCategoryControllerFunction,
  deleteProductSubCategoryControllerFunction
} from './productSubCategoryControllers.js'

const getProductSubCategoryListController =
  getProductSubCategoryControllerFunction({
    getProductSubCategoryListUseCase
  })
const createProductSubCategoryController =
  createProductSubCategoryControllerFunction({
    createProductSubCategoryUseCase
  })
const updateProductSubCategoryController =
  updateProductSubCategoryControllerFunction({
    updateProductSubCategoryUseCase
  })

const deleteProductSubCategoryController =
  deleteProductSubCategoryControllerFunction({
    deleteProductSubCategoryUseCase
  })

const productSubCategoryController = Object.freeze({
  getProductSubCategoryListController,
  createProductSubCategoryController,
  updateProductSubCategoryController,
  deleteProductSubCategoryController
})

export default productSubCategoryController
export {
  getProductSubCategoryListController,
  createProductSubCategoryController,
  updateProductSubCategoryController,
  deleteProductSubCategoryController
}
