import {
  createProductUseCase,
  getProductListUseCase,
  updateProductUseCase,
  deleteProductUseCase
} from '../useCases/index.js'

import {
  getProductControllerFunction,
  createProductControllerFunction,
  updateProductControllerFunction,
  deleteProductControllerFunction
} from './productControllers.js'

const getProductListController = getProductControllerFunction({
  getProductListUseCase
})
const createProductController = createProductControllerFunction({
  createProductUseCase
})
const updateProductController = updateProductControllerFunction({
  updateProductUseCase
})

const deleteProductController = deleteProductControllerFunction({
  deleteProductUseCase
})

const productController = Object.freeze({
  getProductListController,
  createProductController,
  updateProductController,
  deleteProductController
})

export default productController
export {
  getProductListController,
  createProductController,
  updateProductController,
  deleteProductController
}
