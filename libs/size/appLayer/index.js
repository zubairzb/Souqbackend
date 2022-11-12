import {
  createSizeUseCase,
  getSizeListUseCase,
  updateSizeUseCase,
  deleteSizeUseCase
} from '../useCases/index.js'

import {
  getSizeControllerFunction,
  createSizeControllerFunction,
  updateSizeControllerFunction,
  deleteSizeControllerFunction
} from './sizeControllers.js'

const getSizeListController = getSizeControllerFunction({
  getSizeListUseCase
})
const createSizeController = createSizeControllerFunction({
  createSizeUseCase
})
const updateSizeController = updateSizeControllerFunction({
  updateSizeUseCase
})

const deleteSizeController = deleteSizeControllerFunction({
  deleteSizeUseCase
})

const sizeController = Object.freeze({
  getSizeListController,
  createSizeController,
  updateSizeController,
  deleteSizeController
})

export default sizeController
export {
  getSizeListController,
  createSizeController,
  updateSizeController,
  deleteSizeController
}
