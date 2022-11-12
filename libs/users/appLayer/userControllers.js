/*
  FUNCTION USE 
  *  this function call {getUsersListUseCase} with httpRequest then return the response with headers and status code.
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
export function getUserControllerFunction({ getUsersListUseCase }) {
  return async function getUsers(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const getUserList = await getUsersListUseCase(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: getUserList
      };
    } catch (e) {
      // TODO: Error logging
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
  * this function call {createUserUseCase} with httpRequest then return the response with headers and status code.
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
export function createUserControllerFunction({ createUserUseCase }) {
  return async function createUser(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const createUsers = await createUserUseCase(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: createUsers
      };
    } catch (e) {
      // TODO: Error logging
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
  * this function call {updateUserUseCase} with httpRequest then return the response with headers and status code.
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
export function updateUserControllerFunction({ updateUserUseCase }) {
  return async function updateUser(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const updateUsers = await updateUserUseCase(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: updateUsers
      };
    } catch (e) {
      // TODO: Error logging
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
  * this function call {deleteUserUseCase} with httpRequest then return the response with headers and status code.
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
export function deleteUserControllerFunction({ deleteUserUseCase }) {
  return async function deleteUser(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const deleteUsers = await deleteUserUseCase(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: deleteUsers
      };
    } catch (e) {
      // TODO: Error logging
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
