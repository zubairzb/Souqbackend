/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strStateName = STRING,
  *   }
  response(success)
  * some freeze object
      * getStateName
 response(Error)
  * key missing errors
   */
export default function stateEntityFunction() {
  return async function stateEntity({
    intCountryId = 0,
    strStateName = ''
  } = {}) {
    let arrErrHandler = []
    if (!intCountryId) arrErrHandler.push('KEY_MISSING_COUNTRY_ID')
    if (!strStateName) arrErrHandler.push('KEY_MISSING_STATE_NAME')
    if (arrErrHandler.length) {
      throw new Error(arrErrHandler)
    }
    return Object.freeze({
      getStateName: () => strStateName.trim(),
      getCountryId: () => intCountryId
    })
  }
}
