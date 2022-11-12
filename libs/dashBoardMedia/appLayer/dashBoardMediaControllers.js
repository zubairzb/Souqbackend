/*
  FUNCTION USE 
  *  this function call {getDashBoardMediaListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createDashBoardMedia/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'DashBoardMedia-Agent': 'insomnia/2020.2.2'
   *   }STATES
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
export function getDashBoardMediaControllerFunction({
  getDashBoardMediaListUseCase
}) {
  return async function getDashBoardMedia(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const getDashBoardMediaList = await getDashBoardMediaListUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: getDashBoardMediaList
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
/*
  FUNCTION USE 
  * this function call {createDashBoardMediaUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createDashBoardMedia/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'DashBoardMedia-Agent': 'insomnia/2020.2.2'
   *   }
   * }
   response(Success)
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
export function createDashBoardMediaControllerFunction({
  createDashBoardMediaUseCase
}) {
  return async function createDashBoardMedia(httpRequest) {
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    try {
      httpRequest.body = JSON.parse(JSON.stringify(httpRequest.body))
      httpRequest.body['objDashBoardMedias'] = httpRequest.file
      const createDashBoardMedia = await createDashBoardMediaUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: createDashBoardMedia
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

/*
  FUNCTION USE 
  * this function call {updateDashBoardMediaUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createDashBoardMedia/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'DashBoardMedia-Agent': 'insomnia/2020.2.2'
   *   }
   * }
  response(Success)
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
export function updateDashBoardMediaControllerFunction({
  updateDashBoardMediaUseCase
}) {
  return async function updateDashBoardMedia(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      httpRequest.body = JSON.parse(JSON.stringify(httpRequest.body))
      httpRequest.body['objDashBoardMedias'] = httpRequest.file
      const updateDashBoardMedia = await updateDashBoardMediaUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: updateDashBoardMedia
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

/*
  FUNCTION USE 
  * this function call {deleteDashBoardMediaUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createDashBoardMedia/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'DashBoardMedia-Agent': 'insomnia/2020.2.2'
   *   }
   * }
  response(Success)
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
export function deleteDashBoardMediaControllerFunction({
  deleteDashBoardMediaUseCase
}) {
  return async function deleteDashBoardMedia(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleteDashBoardMedia = await deleteDashBoardMediaUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: deleteDashBoardMedia
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
