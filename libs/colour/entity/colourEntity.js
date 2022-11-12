/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strColourName = STRING,
  *   }
  response(success)
  * some freeze object
      * getColourName
 response(Error)
  * key missing errors
   */
export default function colourEntityFunction() {
  return async function colourEntity({ strColourName = '' } = {}) {
    if (!strColourName) throw new Error('KEY_MISSING_COLOUR_NAME')
    return Object.freeze({
      getColourName: () => strColourName.trim()
    })
  }
}
