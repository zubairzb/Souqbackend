import {
  loginUseCase,
  logoutUseCase,
  refreshTokenUseCase
} from '../useCases/index.js'

import {
  loginControllersFunction,
  refreshTokenControllersFunction,
  logoutControllersFunction
} from './authControllers'

const loginController = loginControllersFunction({ loginUseCase })
const refreshTokenController = refreshTokenControllersFunction({
  refreshTokenUseCase
})
const logoutController = logoutControllersFunction({ logoutUseCase })

const authControllers = Object.freeze({
  loginController,
  refreshTokenController,
  logoutController
})

export default authControllers
export { loginController, refreshTokenController, logoutController }
