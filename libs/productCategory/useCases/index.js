import getProductCategoryUseCaseFunction from './getProductCategoryUseCase'
import createProductCategoryUseCaseFunction from './createProductCategoryUseCase'
import updateProductCategoryUseCaseFunction from './updateProductCategoryUseCase'
import deleteProductCategoryUseCaseFunction from './deleteProductCategoryUseCase'
import productCategoryEntity from '../entity/index.js'

import productCategoryDB from '../persistence/index.js'

const createProductCategoryUseCase = createProductCategoryUseCaseFunction({
  productCategoryDB,
  productCategoryEntity
})
const getProductCategoryListUseCase = getProductCategoryUseCaseFunction({
  productCategoryDB
})
const updateProductCategoryUseCase = updateProductCategoryUseCaseFunction({
  productCategoryDB,
  productCategoryEntity
})
const deleteProductCategoryUseCase = deleteProductCategoryUseCaseFunction({
  productCategoryDB
})

const commentService = Object.freeze({
  createProductCategoryUseCase,
  getProductCategoryListUseCase,
  updateProductCategoryUseCase,
  deleteProductCategoryUseCase
})

export default commentService
export {
  createProductCategoryUseCase,
  getProductCategoryListUseCase,
  updateProductCategoryUseCase,
  deleteProductCategoryUseCase
}
