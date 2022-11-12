import getProductUseCaseFunction from './getProductUseCase'
import createProductUseCaseFunction from './createProductUseCase'
import updateProductUseCaseFunction from './updateProductUseCase'
import deleteProductUseCaseFunction from './deleteProductUseCase'
import productEntity from '../entity/index.js'

import productDB from '../persistence/index.js'

const createProductUseCase = createProductUseCaseFunction({
  productDB,
  productEntity
})
const getProductListUseCase = getProductUseCaseFunction({
  productDB
})
const updateProductUseCase = updateProductUseCaseFunction({
  productDB,
  productEntity
})
const deleteProductUseCase = deleteProductUseCaseFunction({
  productDB
})

const commentService = Object.freeze({
  createProductUseCase,
  getProductListUseCase,
  updateProductUseCase,
  deleteProductUseCase
})

export default commentService
export {
  createProductUseCase,
  getProductListUseCase,
  updateProductUseCase,
  deleteProductUseCase
}
