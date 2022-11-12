import isEmailValid from '../../../helpers/functions/emailValidator.js'

/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strProductSubCategoryName = STRING,
  *   }
  response(success)
  * some freeze object
      * getProductSubCategoryName
 response(Error)
  * key missing errors
   */
export default function productSubCategoryEntityFunction() {
  return async function productSubCategoryEntity({
    intCategoryId,
    strProductSubCategoryName = ''
  } = {}) {
    if (!intCategoryId) throw new Error('KEY_MISSING_PRODUCT_CATEGORY_ID')
    if (!strProductSubCategoryName)
      throw new Error('KEY_MISSING_PRODUCT_SUB_CATEGORY_NAME')

    return Object.freeze({
      getCategoryId: () => intCategoryId,
      getProductSubCategoryName: () => strProductSubCategoryName.trim()
    })
  }
}
