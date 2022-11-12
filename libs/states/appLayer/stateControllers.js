/*
  FUNCTION USE 
  *  this function call {getStatesListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createState/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'State-Agent': 'insomnia/2020.2.2'
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
export function getStateControllerFunction({ getStatesListUseCase }) {
  return async function getStates(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const getStateList = await getStatesListUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: getStateList
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
  * this function call {createStateUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createState/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'State-Agent': 'insomnia/2020.2.2'
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
export function createStateControllerFunction({ createStateUseCase }) {
  return async function createState(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const createStates = await createStateUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: createStates
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
  * this function call {updateStateUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createState/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'State-Agent': 'insomnia/2020.2.2'
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
export function updateStateControllerFunction({ updateStateUseCase }) {
  return async function updateState(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const updateStates = await updateStateUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: updateStates
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
  * this function call {deleteStateUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createState/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'State-Agent': 'insomnia/2020.2.2'
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
export function deleteStateControllerFunction({ deleteStateUseCase }) {
  return async function deleteState(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleteStates = await deleteStateUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: deleteStates
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
