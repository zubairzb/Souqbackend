import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all users to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *   userLoginWithMobile
  *   }
  */

export default function authDbFunction({
  objQuery,
  jwtGenerate,
  verifyRefreshToken,
  bcrypt
}) {
  return Object.freeze({
    userLogin,
    refreshToken,
    userLogout
  })
  /*
  FUNCTION USE 
    this function for login.
    this return login details to useCases 
  request
   * {  
   *    strUserName:STRING,
   *    strPassword:STRING
   *  }
  response
   * {successMessage}
  */
  async function userLogin({ strEmail = '', strPassword = '' }) {
    let objUserListResponse = {
      strAccessToken: '',
      strRefreshToken: ''
    }
    let response = await pgConnection.query(
      objQuery.loginQuery.getQueryLoginDetails,
      [strEmail]
    )
    if (response.rowCount === 0) {
      throw new Error('USER_NOT_REGISTERED')
    }
    // Iam using bcrypt npm module for hashing password . the compare function used for compare passwords
    if (await bcrypt.compare(strPassword, response['rows'][0]['strPassword'])) {
      let intUserId = response['rows'][0]['intUserPk']
      let strUserName = response['rows'][0]['strUserName']
      // Iam using JWT token authentication for more https://jwt.io/
      const strAccessToken = await jwtGenerate({
        intUserId,
        blnAccessToken: true
      })
      const strRefreshToken = await jwtGenerate({
        intUserId,
        accessToken: false
      })
      objUserListResponse['intUserId'] = intUserId
      objUserListResponse['strUserName'] = strUserName
      objUserListResponse['strAccessToken'] = strAccessToken
      objUserListResponse['strRefreshToken'] = strRefreshToken
      return objUserListResponse
    } else {
      throw new Error('INCORRECT_PASSWORD_OR_USERNAME') // specified errors response can be a vulnerability
    }
  }
  async function refreshToken({ strRefreshToken }) {
    let objUserListResponse = {
      strAccessToken: '',
      strRefreshToken: ''
    }
    const intUserId = await verifyRefreshToken({ strRefreshToken })

    const strAccessToken = await jwtGenerate({
      intUserId,
      strAccessToken: true
    })
    const strRefreshTokens = await jwtGenerate({
      intUserId,
      strAccessToken: false
    })
    objUserListResponse['strAccessToken'] = strAccessToken
    objUserListResponse['strRefreshToken'] = strRefreshTokens
    return objUserListResponse
  }

  async function userLogout({ strRefreshToken }) {
    try {
      const intUserId = await verifyRefreshToken({ strRefreshToken })
      if (intUserId) return { message: 'LOGOUT_SUCCESSFUL' }
    } catch (error) {
      console.log(error.message)
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
}
