import getProductSubCategoryUseCaseFunction from './getProductSubCategoryUseCase'
import createProductSubCategoryUseCaseFunction from './createProductSubCategoryUseCase'
import updateProductSubCategoryUseCaseFunction from './updateProductSubCategoryUseCase'
import deleteProductSubCategoryUseCaseFunction from './deleteProductSubCategoryUseCase'
import productSubCategoryEntity from '../entity/index.js'

import productSubCategoryDB from '../persistence/index.js'

const createProductSubCategoryUseCase = createProductSubCategoryUseCaseFunction(
  {
    productSubCategoryDB,
    productSubCategoryEntity
  }
)
const getProductSubCategoryListUseCase = getProductSubCategoryUseCaseFunction({
  productSubCategoryDB
})
const updateProductSubCategoryUseCase = updateProductSubCategoryUseCaseFunction(
  {
    productSubCategoryDB,
    productSubCategoryEntity
  }
)
const deleteProductSubCategoryUseCase = deleteProductSubCategoryUseCaseFunction(
  {
    productSubCategoryDB
  }
)

const commentService = Object.freeze({
  createProductSubCategoryUseCase,
  getProductSubCategoryListUseCase,
  updateProductSubCategoryUseCase,
  deleteProductSubCategoryUseCase
})

export default commentService
export {
  createProductSubCategoryUseCase,
  getProductSubCategoryListUseCase,
  updateProductSubCategoryUseCase,
  deleteProductSubCategoryUseCase
}
