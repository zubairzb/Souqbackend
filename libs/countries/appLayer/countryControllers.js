/*
  FUNCTION USE 
  *  this function call {getCountryListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createCountry/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Country-Agent': 'insomnia/2020.2.2'
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
export function getCountryControllerFunction({ getCountryListUseCase }) {
  return async function getCountry(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const getCountryList = await getCountryListUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: getCountryList
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
  * this function call {createCountryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createCountry/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Country-Agent': 'insomnia/2020.2.2'
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
export function createCountryControllerFunction({ createCountryUseCase }) {
  return async function createCountry(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const createCountry = await createCountryUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: createCountry
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
  * this function call {updateCountryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createCountry/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Country-Agent': 'insomnia/2020.2.2'
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
export function updateCountryControllerFunction({ updateCountryUseCase }) {
  return async function updateCountry(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const updateCountry = await updateCountryUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: updateCountry
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
  * this function call {deleteCountryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createCountry/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Country-Agent': 'insomnia/2020.2.2'
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
export function deleteCountryControllerFunction({ deleteCountryUseCase }) {
  return async function deleteCountry(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleteCountry = await deleteCountryUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: deleteCountry
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
