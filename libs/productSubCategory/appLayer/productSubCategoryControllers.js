/*
  FUNCTION USE 
  *  this function call {getProductSubCategoryListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProductSubCategory/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'ProductSubCategory-Agent': 'insomnia/2020.2.2'
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
export function getProductSubCategoryControllerFunction({
  getProductSubCategoryListUseCase
}) {
  return async function getProductSubCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const getProductSubCategoryList = await getProductSubCategoryListUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: getProductSubCategoryList
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
  * this function call {createProductSubCategoryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProductSubCategory/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'ProductSubCategory-Agent': 'insomnia/2020.2.2'
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
export function createProductSubCategoryControllerFunction({
  createProductSubCategoryUseCase
}) {
  return async function createProductSubCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const createProductSubCategory = await createProductSubCategoryUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: createProductSubCategory
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
  * this function call {updateProductSubCategoryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProductSubCategory/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'ProductSubCategory-Agent': 'insomnia/2020.2.2'
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
export function updateProductSubCategoryControllerFunction({
  updateProductSubCategoryUseCase
}) {
  return async function updateProductSubCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const updateProductSubCategory = await updateProductSubCategoryUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: updateProductSubCategory
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
  * this function call {deleteProductSubCategoryUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProductSubCategory/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'ProductSubCategory-Agent': 'insomnia/2020.2.2'
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
export function deleteProductSubCategoryControllerFunction({
  deleteProductSubCategoryUseCase
}) {
  return async function deleteProductSubCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleteProductSubCategory = await deleteProductSubCategoryUseCase(
        httpRequest.body
      )
      return {
        headers,
        statusCode: 200,
        body: deleteProductSubCategory
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
