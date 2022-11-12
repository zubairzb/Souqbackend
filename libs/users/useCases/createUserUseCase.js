/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { userDB, userEntity }
    response
     * based the response of functions
    */

export default function createUserUseCaseFunction({ userDB, userEntity }) {
  return async function createUsers({
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
    let userList = await userDB.createUser({
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
