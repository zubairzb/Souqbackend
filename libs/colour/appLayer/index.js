import {
  createColourUseCase,
  getColourListUseCase,
  updateColourUseCase,
  deleteColourUseCase
} from '../useCases/index.js'

import {
  getColourControllerFunction,
  createColourControllerFunction,
  updateColourControllerFunction,
  deleteColourControllerFunction
} from './colourControllers.js'

const getColourListController = getColourControllerFunction({
  getColourListUseCase
})
const createColourController = createColourControllerFunction({
  createColourUseCase
})
const updateColourController = updateColourControllerFunction({
  updateColourUseCase
})

const deleteColourController = deleteColourControllerFunction({
  deleteColourUseCase
})

const colourController = Object.freeze({
  getColourListController,
  createColourController,
  updateColourController,
  deleteColourController
})

export default colourController
export {
  getColourListController,
  createColourController,
  updateColourController,
  deleteColourController
}
