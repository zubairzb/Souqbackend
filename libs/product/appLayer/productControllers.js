/*
  FUNCTION USE 
  *  this function call {getProductListUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProduct/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Product-Agent': 'insomnia/2020.2.2'
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
export function getProductControllerFunction({ getProductListUseCase }) {
  return async function getProduct(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const getProductList = await getProductListUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: getProductList
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
  * this function call {createProductUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProduct/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Product-Agent': 'insomnia/2020.2.2'
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
export function createProductControllerFunction({ createProductUseCase }) {
  return async function createProduct(httpRequest) {
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    try {
      httpRequest.body = JSON.parse(JSON.stringify(httpRequest.body))
      httpRequest.files = JSON.parse(JSON.stringify(httpRequest.files))
      httpRequest.body['files'] = httpRequest.files['files']
      const createProduct = await createProductUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: createProduct
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
  * this function call {updateProductUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProduct/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Product-Agent': 'insomnia/2020.2.2'
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
export function updateProductControllerFunction({ updateProductUseCase }) {
  return async function updateProduct(httpRequest) {
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    try {
      httpRequest.body = JSON.parse(JSON.stringify(httpRequest.body))
      httpRequest.files = JSON.parse(JSON.stringify(httpRequest.files))
      httpRequest.body['files'] = httpRequest.files['files']
      const updateProduct = await updateProductUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: updateProduct
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
  * this function call {deleteProductUseCase} with httpRequest then return the response with headers and status code.
  request
   * {
   *   body: {
   *   ........
   *   },
   *   query: {},
   *   params: {},
   *   ip: '::ffff:127.0.0.1',
   *   method: 'POST',
   *   path: '/createProduct/',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Referer: undefined,
   *     'Product-Agent': 'insomnia/2020.2.2'
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
export function deleteProductControllerFunction({ deleteProductUseCase }) {
  return async function deleteProduct(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleteProduct = await deleteProductUseCase(httpRequest.body)
      return {
        headers,
        statusCode: 200,
        body: deleteProduct
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
