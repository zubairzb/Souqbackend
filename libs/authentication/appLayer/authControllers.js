/*
  FUNCTION USE 
  *  this function call {loginUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createUser/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'User-Agent': 'insomnia/2020.2.2'
   *   }
   * }
  response(success)
   *  {
   *    headers,
   *    statusCode: 200,
   *    body: response from useCase
   *  }
   response(Error)
   * {
   *    headers,
   *    statusCode: 400,
   *    body: {
   *      error: e.message
   *    }
   *  }
   */
export function loginControllersFunction({ loginUseCase }) {
  return async function userLogin(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const loginDetails = await loginUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: loginDetails
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
export function refreshTokenControllersFunction({ refreshTokenUseCase }) {
  return async function RefreshToken(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const refreshTokenDetails = await refreshTokenUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: refreshTokenDetails
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
export function logoutControllersFunction({ logoutUseCase }) {
  return async function userLogout(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const logoutDetails = await logoutUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: logoutDetails
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
