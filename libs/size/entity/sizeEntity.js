/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strSizeName = STRING,
  *   }
  response(success)
  * some freeze object
      * getSizeName
 response(Error)
  * key missing errors
   */
export default function sizeEntityFunction() {
  return async function sizeEntity({ strSizeName = '' } = {}) {
    if (!strSizeName) throw new Error('KEY_MISSING_SIZE_NAME')
    return Object.freeze({
      getSizeName: () => strSizeName.trim()
    })
  }
}
