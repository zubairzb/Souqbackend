/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { userDB, userEntity }
    response
     * based the response of functions
    */
export default function updateUserUseCaseFunction({ userDB, userEntity }) {
  return async function updateUsers({
    intUserPk = '',
    strUserName = '',
    strAddress = '',
    strEmail = '',
    strMobile = '',
    strWhatsAppMobile = '',
    strPassword = '',
    blnSameMobile = false,
    chrUserType = 'C',
    chrStatus = 'A'
  } = {}) {
    if (!intUserPk) errHandler.push('KEY_MISSING_USER_PK')
    const objValidatedUser = await userEntity({
      strUserName,
      strAddress,
      strEmail,
      strMobile,
      strWhatsAppMobile,
      strPassword,
      blnSameMobile,
      chrUserType,
      chrStatus
    })
    let userList = await userDB.updateUser({
      intUserPk: intUserPk,
      strUserName: objValidatedUser.getUserName(),
      strAddress: objValidatedUser.getAddress(),
      strEmail: objValidatedUser.getEmail(),
      strMobile: objValidatedUser.getMobile(),
      strPassword: objValidatedUser.getPassword(),
      strWhatsAppMobile: objValidatedUser.getWhatsAppMobile(),
      chrUserType: objValidatedUser.getUserType(),
      chrStatus: objValidatedUser.getStatus()
    })
    return userList
  }
}
