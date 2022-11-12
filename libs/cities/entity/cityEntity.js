/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strCityName = STRING,
  *   }
  response(success)
  * some freeze object
      * getCityName
 response(Error)
  * key missing errors
   */
export default function cityEntityFunction() {
  return async function cityEntity({ intStateId = 0, strCityName = '' } = {}) {
    let arrErrHandler = []
    if (!intStateId) arrErrHandler.push('KEY_MISSING_STATE_ID')
    if (!strCityName) arrErrHandler.push('KEY_MISSING_CITY_NAME')
    if (arrErrHandler.length) {
      throw new Error(arrErrHandler)
    }
    return Object.freeze({
      getCityName: () => strCityName.trim(),
      getStateId: () => intStateId
    })
  }
}
