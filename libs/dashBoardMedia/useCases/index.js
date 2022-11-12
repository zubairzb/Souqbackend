import getDashBoardMediaUseCaseFunction from './getDashBoardMediaUseCase'
import createDashBoardMediaUseCaseFunction from './createDashBoardMediaUseCase'
import updateDashBoardMediaUseCaseFunction from './updateDashBoardMediaUseCase'
import deleteDashBoardMediaUseCaseFunction from './deleteDashBoardMediaUseCase'
import dashBoardMediaEntity from '../entity/index.js'

import dashBoardMediaDB from '../persistence/index.js'

const createDashBoardMediaUseCase = createDashBoardMediaUseCaseFunction({
  dashBoardMediaDB,
  dashBoardMediaEntity
})
const getDashBoardMediaListUseCase = getDashBoardMediaUseCaseFunction({
  dashBoardMediaDB
})
const updateDashBoardMediaUseCase = updateDashBoardMediaUseCaseFunction({
  dashBoardMediaDB,
  dashBoardMediaEntity
})
const deleteDashBoardMediaUseCase = deleteDashBoardMediaUseCaseFunction({
  dashBoardMediaDB
})

const commentService = Object.freeze({
  createDashBoardMediaUseCase,
  getDashBoardMediaListUseCase,
  updateDashBoardMediaUseCase,
  deleteDashBoardMediaUseCase
})

export default commentService
export {
  createDashBoardMediaUseCase,
  getDashBoardMediaListUseCase,
  updateDashBoardMediaUseCase,
  deleteDashBoardMediaUseCase
}
