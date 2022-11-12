/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { userDB, loginEntity }
    response
     * based the response of functions
    */
export default function refreshTokenUseCaseFunction({ authDB }) {
  return async function userRefreshToken({ strRefreshToken = '' } = {}) {
    if (!strRefreshToken) throw new Error('BAD_REQUEST')

    let objRefreshTokenResponse = await authDB.refreshToken({
      strRefreshToken
    })
    return objRefreshTokenResponse
  }
}
