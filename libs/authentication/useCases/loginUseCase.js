/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { userDB, loginEntity }
    response
     * based the response of functions
    */
export default function loginUseCaseFunction({ authDB, authEntity }) {
  return async function userLogin({ strEmail = '', strPassword = '' } = {}) {
    const objValidatedLoginData = await authEntity({
      strEmail,
      strPassword
    })

    let objLoginResponse = await authDB.userLogin({
      strEmail: objValidatedLoginData.getEmail(),
      strPassword: objValidatedLoginData.getPassword()
    })
    return objLoginResponse
  }
}
