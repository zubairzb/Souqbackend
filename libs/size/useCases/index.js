import getSizeListUseCaseFunction from './getSizeListUseCase'
import createSizeUseCaseFunction from './createSizeUseCase'
import updateSizeUseCaseFunction from './updateSizeUseCase'
import deleteSizeUseCaseFunction from './deleteSizeUseCase'
import sizeEntity from '../entity/index.js'

import sizeDB from '../persistence/index.js'

const createSizeUseCase = createSizeUseCaseFunction({
  sizeDB,
  sizeEntity
})
const getSizeListUseCase = getSizeListUseCaseFunction({ sizeDB })
const updateSizeUseCase = updateSizeUseCaseFunction({
  sizeDB,
  sizeEntity
})
const deleteSizeUseCase = deleteSizeUseCaseFunction({ sizeDB })

const commentService = Object.freeze({
  createSizeUseCase,
  getSizeListUseCase,
  updateSizeUseCase,
  deleteSizeUseCase
})

export default commentService
export {
  createSizeUseCase,
  getSizeListUseCase,
  updateSizeUseCase,
  deleteSizeUseCase
}
