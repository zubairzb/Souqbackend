/*
  FUNCTION USE 
  *  this entity function for basic validations.
  request
  *  { strUserName,
  *    strPassword }
  response(success)
  * some freeze object
      * getUserName
      * getPassword
 response(Error)
  * key missing errors
   */
export default function loginEntityFunction() {
  return function loginEntity({ strEmail, strPassword } = {}) {
    if (!strEmail) {
      throw new Error('MISSING_EMAIL')
    }
    if (!strPassword) {
      throw new Error('MISSING_PASSWORD')
    }
    return Object.freeze({
      getEmail: () => strEmail,
      getPassword: () => strPassword
    })
  }
}
