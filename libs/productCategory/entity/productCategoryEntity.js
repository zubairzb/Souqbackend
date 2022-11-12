/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strProductCategoryName = STRING,
  *   }
  response(success)
  * some freeze object
      * getProductCategoryName
 response(Error)
  * key missing errors
   */
export default function productCategoryEntityFunction() {
  return async function productCategoryEntity({
    strProductCategoryName = ''
  } = {}) {
    if (!strProductCategoryName)
      throw new Error('KEY_MISSING_PRODUCT_CATEGORY_NAME')

    return Object.freeze({
      getEntityId: () => intEntityId.trim(),
      getProductCategoryName: () => strProductCategoryName.trim()
    })
  }
}
