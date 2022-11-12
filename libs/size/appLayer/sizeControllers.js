/*
  FUNCTION USE 
  *  this function call {getSizeListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createSize/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Size-Agent': 'insomnia/2020.2.2'
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
export function getSizeControllerFunction({ getSizeListUseCase }) {
  return async function getSize(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const getSizeList = await getSizeListUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: getSizeList
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
  * this function call {createSizeUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createSize/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Size-Agent': 'insomnia/2020.2.2'
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
export function createSizeControllerFunction({ createSizeUseCase }) {
  return async function createSize(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const createSize = await createSizeUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: createSize
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
  * this function call {updateSizeUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createSize/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Size-Agent': 'insomnia/2020.2.2'
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
export function updateSizeControllerFunction({ updateSizeUseCase }) {
  return async function updateSize(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const updateSize = await updateSizeUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: updateSize
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
  * this function call {deleteSizeUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createSize/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Size-Agent': 'insomnia/2020.2.2'
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
export function deleteSizeControllerFunction({ deleteSizeUseCase }) {
  return async function deleteSize(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleteSize = await deleteSizeUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: deleteSize
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
