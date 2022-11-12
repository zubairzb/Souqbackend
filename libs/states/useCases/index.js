import getStateListUseCaseFunction from './getStateListUseCase'
import createStateUseCaseFunction from './createStateUseCase'
import updateStateUseCaseFunction from './updateStateUseCase'
import deleteStateUseCaseFunction from './deleteStateUseCase'
import stateEntity from '../entity/index.js'

import stateDB from '../persistence/index.js'

const createStateUseCase = createStateUseCaseFunction({ stateDB, stateEntity })
const getStatesListUseCase = getStateListUseCaseFunction({ stateDB })
const updateStateUseCase = updateStateUseCaseFunction({ stateDB, stateEntity })
const deleteStateUseCase = deleteStateUseCaseFunction({ stateDB })

const commentService = Object.freeze({
  createStateUseCase,
  getStatesListUseCase,
  updateStateUseCase,
  deleteStateUseCase
})

export default commentService
export {
  createStateUseCase,
  getStatesListUseCase,
  updateStateUseCase,
  deleteStateUseCase
}
