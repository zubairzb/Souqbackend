/*
  FUNCTION USE 
  *  this function call {getCitiesListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createCity/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'City-Agent': 'insomnia/2020.2.2'
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
export function getCityControllerFunction({ getCitiesListUseCase }) {
  return async function getCities(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const getCityList = await getCitiesListUseCase(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: getCityList
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
}
/*
  FUNCTION USE 
  * this function call {createCityUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createCity/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'City-Agent': 'insomnia/2020.2.2'
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
export function createCityControllerFunction({ createCityUseCase }) {
  return async function createCity(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const createCities = await createCityUseCase(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: createCities
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
}

/*
  FUNCTION USE 
  * this function call {updateCityUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createCity/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'City-Agent': 'insomnia/2020.2.2'
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
export function updateCityControllerFunction({ updateCityUseCase }) {
  return async function updateCity(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const updateCities = await updateCityUseCase(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: updateCities
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
}

/*
  FUNCTION USE 
  * this function call {deleteCityUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createCity/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'City-Agent': 'insomnia/2020.2.2'
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
export function deleteCityControllerFunction({ deleteCityUseCase }) {
  return async function deleteCity(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const deleteCities = await deleteCityUseCase(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: deleteCities
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
}
