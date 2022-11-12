import isEmailValid from '../../../helpers/functions/emailValidator.js'

/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strDashBoardMediaName = STRING,
  *   }
  response(success)
  * some freeze object
      * getDashBoardMediaName
 response(Error)
  * key missing errors
   */
export default function dashBoardMediaEntityFunction() {
  return async function dashBoardMediaEntity({
    objDashBoardMedias,
    intProductId = 0
  } = {}) {
    if (!intProductId)
      throw new Error('KEY_MISSING_DASH_BOARD_MEDIA_PRODUCT_ID')
    if (!objDashBoardMedias) throw new Error('KEY_MISSING_DASH_BOARD_MEDIA')

    return Object.freeze({
      getDashBoardMedias: () => objDashBoardMedias,
      getProductId: () => intProductId
    })
  }
}
