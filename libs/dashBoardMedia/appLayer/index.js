import {
  createDashBoardMediaUseCase,
  getDashBoardMediaListUseCase,
  updateDashBoardMediaUseCase,
  deleteDashBoardMediaUseCase
} from '../useCases/index.js'

import {
  getDashBoardMediaControllerFunction,
  createDashBoardMediaControllerFunction,
  updateDashBoardMediaControllerFunction,
  deleteDashBoardMediaControllerFunction
} from './dashBoardMediaControllers.js'

const getDashBoardMediaListController = getDashBoardMediaControllerFunction({
  getDashBoardMediaListUseCase
})
const createDashBoardMediaController = createDashBoardMediaControllerFunction({
  createDashBoardMediaUseCase
})
const updateDashBoardMediaController = updateDashBoardMediaControllerFunction({
  updateDashBoardMediaUseCase
})

const deleteDashBoardMediaController = deleteDashBoardMediaControllerFunction({
  deleteDashBoardMediaUseCase
})

const dashBoardMediaController = Object.freeze({
  getDashBoardMediaListController,
  createDashBoardMediaController,
  updateDashBoardMediaController,
  deleteDashBoardMediaController
})

export default dashBoardMediaController
export {
  getDashBoardMediaListController,
  createDashBoardMediaController,
  updateDashBoardMediaController,
  deleteDashBoardMediaController
}
