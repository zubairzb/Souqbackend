import isEmailValid from '../../../helpers/functions/emailValidator.js'
/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strUserName = STRING,
  *     strPassword = STRING,
  *     strEmail = STRING,
  *     strMobile = STRING
  *   }
  response(success)
  * some freeze object
      * getUserName
      * getPassword
      * getEmail
      * getMobile
 response(Error)
  * key missing errors
   */
export default function userEntityFunction() {
  return async function userEntity({
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
    let errHandler = []

    if (!strUserName) {
      errHandler.push('KEY_MISSING_USER_NAME')
    } else if (strUserName.length < 2) {
      errHandler.push('INVALID_USER_NAME')
    }
    if (!strPassword) {
      errHandler.push('KEY_MISSING_PASSWORD')
    } else if (strPassword.length < 8) {
      errHandler.push('PASSWORD_MUST_BE_8_LETTERS')
    }
    let emailValidation = await isEmailValid(strEmail)
    if (emailValidation.emailValid === false) {
      errHandler.push(emailValidation.message)
    }
    if (!strMobile) {
      errHandler.push('KEY_MISSING_MOBILE_NUMBER')
    } else if (isNaN(strMobile)) {
      errHandler.push('INVALID_MOBILE_NUMBER')
    } else {
      if (blnSameMobile == true) strWhatsAppMobile = strMobile
    }
    if (!strWhatsAppMobile) {
      errHandler.push('KEY_MISSING_WHATS_APP_MOBILE_NUMBER')
    } else if (isNaN(strWhatsAppMobile)) {
      errHandler.push('INVALID_WHATS_APP_MOBILE_NUMBER')
    }

    if (errHandler.length) throw new Error(errHandler)
    return Object.freeze({
      getUserName: () => strUserName.trim(),
      getAddress: () => strAddress.trim(),
      getEmail: () => strEmail.trim(),
      getMobile: () => strMobile.trim(),
      getPassword: () => strPassword.trim(),
      getWhatsAppMobile: () => strWhatsAppMobile.trim(),
      getUserType: () => chrUserType.trim(),
      getStatus: () => chrStatus.trim()
    })
  }
}
