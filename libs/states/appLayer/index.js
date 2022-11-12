import {
  createStateUseCase,
  getStatesListUseCase,
  updateStateUseCase,
  deleteStateUseCase
} from '../useCases/index.js'

import {
  getStateControllerFunction,
  createStateControllerFunction,
  updateStateControllerFunction,
  deleteStateControllerFunction
} from './stateControllers.js'

const getStatesListController = getStateControllerFunction({
  getStatesListUseCase
})
const createStatesController = createStateControllerFunction({
  createStateUseCase
})
const updateStatesController = updateStateControllerFunction({
  updateStateUseCase
})

const deleteStatesController = deleteStateControllerFunction({
  deleteStateUseCase
})

const stateController = Object.freeze({
  getStatesListController,
  createStatesController,
  updateStatesController,
  deleteStatesController
})

export default stateController
export {
  getStatesListController,
  createStatesController,
  updateStatesController,
  deleteStatesController
}
