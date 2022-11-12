/*
  FUNCTION USE 
  *  this function call {getProductCategoryListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProductCategory/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'ProductCategory-Agent': 'insomnia/2020.2.2'
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
export function getProductCategoryControllerFunction({
  getProductCategoryListUseCase
}) {
  return async function getProductCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const getProductCategoryList = await getProductCategoryListUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: getProductCategoryList
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
  * this function call {createProductCategoryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProductCategory/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'ProductCategory-Agent': 'insomnia/2020.2.2'
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
export function createProductCategoryControllerFunction({
  createProductCategoryUseCase
}) {
  return async function createProductCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const createProductCategory = await createProductCategoryUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: createProductCategory
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
  * this function call {updateProductCategoryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProductCategory/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'ProductCategory-Agent': 'insomnia/2020.2.2'
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
export function updateProductCategoryControllerFunction({
  updateProductCategoryUseCase
}) {
  return async function updateProductCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const updateProductCategory = await updateProductCategoryUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: updateProductCategory
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
  * this function call {deleteProductCategoryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProductCategory/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'ProductCategory-Agent': 'insomnia/2020.2.2'
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
export function deleteProductCategoryControllerFunction({
  deleteProductCategoryUseCase
}) {
  return async function deleteProductCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleteProductCategory = await deleteProductCategoryUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: deleteProductCategory
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
