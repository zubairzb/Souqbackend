import getColourListUseCaseFunction from './getColourListUseCase'
import createColourUseCaseFunction from './createColourUseCase'
import updateColourUseCaseFunction from './updateColourUseCase'
import deleteColourUseCaseFunction from './deleteColourUseCase'
import colourEntity from '../entity/index.js'

import colourDB from '../persistence/index.js'

const createColourUseCase = createColourUseCaseFunction({
  colourDB,
  colourEntity
})
const getColourListUseCase = getColourListUseCaseFunction({ colourDB })
const updateColourUseCase = updateColourUseCaseFunction({
  colourDB,
  colourEntity
})
const deleteColourUseCase = deleteColourUseCaseFunction({ colourDB })

const commentService = Object.freeze({
  createColourUseCase,
  getColourListUseCase,
  updateColourUseCase,
  deleteColourUseCase
})

export default commentService
export {
  createColourUseCase,
  getColourListUseCase,
  updateColourUseCase,
  deleteColourUseCase
}
