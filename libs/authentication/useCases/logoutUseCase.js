/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { userDB, logoutEntity }
    response
     * based the response of functions
    */
export default function logoutUseCaseFunction({ authDB }) {
  return async function userLogout({ strRefreshToken } = {}) {
    if (!strRefreshToken) throw new Error('BAD_REQUEST')
    let objLogoutResponse = await authDB.userLogout({
      strRefreshToken
    })
    return objLogoutResponse
  }
}
