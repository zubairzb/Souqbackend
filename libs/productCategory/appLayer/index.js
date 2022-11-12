import {
  createProductCategoryUseCase,
  getProductCategoryListUseCase,
  updateProductCategoryUseCase,
  deleteProductCategoryUseCase
} from '../useCases/index.js'

import {
  getProductCategoryControllerFunction,
  createProductCategoryControllerFunction,
  updateProductCategoryControllerFunction,
  deleteProductCategoryControllerFunction
} from './productCategoryControllers.js'

const getProductCategoryListController = getProductCategoryControllerFunction({
  getProductCategoryListUseCase
})
const createProductCategoryController = createProductCategoryControllerFunction(
  {
    createProductCategoryUseCase
  }
)
const updateProductCategoryController = updateProductCategoryControllerFunction(
  {
    updateProductCategoryUseCase
  }
)

const deleteProductCategoryController = deleteProductCategoryControllerFunction(
  {
    deleteProductCategoryUseCase
  }
)

const productCategoryController = Object.freeze({
  getProductCategoryListController,
  createProductCategoryController,
  updateProductCategoryController,
  deleteProductCategoryController
})

export default productCategoryController
export {
  getProductCategoryListController,
  createProductCategoryController,
  updateProductCategoryController,
  deleteProductCategoryController
}
