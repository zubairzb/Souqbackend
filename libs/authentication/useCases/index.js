import loginUseCaseFunction from './loginUseCase'
import refreshTokenUseCaseFunction from './refreshToken'
import logoutUseCaseFunction from './logoutUseCase'

import authEntity from '../entity/index.js'
import authDB from '../persistence/index.js'

const loginUseCase = loginUseCaseFunction({ authDB, authEntity })
const refreshTokenUseCase = refreshTokenUseCaseFunction({ authDB })
const logoutUseCase = logoutUseCaseFunction({ authDB })

const authService = Object.freeze({
  loginUseCase,
  refreshTokenUseCase,
  logoutUseCase
})

export default authService
export { loginUseCase, refreshTokenUseCase, logoutUseCase }
