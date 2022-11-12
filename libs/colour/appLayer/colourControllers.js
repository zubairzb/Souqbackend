/*
  FUNCTION USE 
  *  this function call {getColourListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createColour/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Colour-Agent': 'insomnia/2020.2.2'
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
export function getColourControllerFunction({ getColourListUseCase }) {
  return async function getColour(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const getColourList = await getColourListUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: getColourList
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
  * this function call {createColourUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createColour/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Colour-Agent': 'insomnia/2020.2.2'
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
export function createColourControllerFunction({ createColourUseCase }) {
  return async function createColour(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const createColour = await createColourUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: createColour
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
  * this function call {updateColourUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createColour/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Colour-Agent': 'insomnia/2020.2.2'
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
export function updateColourControllerFunction({ updateColourUseCase }) {
  return async function updateColour(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const updateColour = await updateColourUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: updateColour
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
  * this function call {deleteColourUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createColour/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Colour-Agent': 'insomnia/2020.2.2'
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
export function deleteColourControllerFunction({ deleteColourUseCase }) {
  return async function deleteColour(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleteColour = await deleteColourUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: deleteColour
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
