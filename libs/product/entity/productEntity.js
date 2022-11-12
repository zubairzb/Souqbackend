import isEmailValid from '../../../helpers/functions/emailValidator.js'

/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strProductName = STRING,
  *   }
  response(success)
  * some freeze object
      * getProductName
 response(Error)
  * key missing errors
   */
export default function productEntityFunction() {
  return async function productEntity({
    intProductPk,
    files,
    intCategoryId = 0,
    intSubCategoryId = 0,
    strProductName = '',
    strProductDescription = '',
    strProductColourId = '',
    strProductPrice = '',
    strProductSizeId = '',
    strShippingDays = '',
    blnWarrantyGuarantee = true,
    blnFeatured = false,
    blnTopSelling = false,
    blnTax = false,
    blnShippingCharges = false,
    chrStatus = 'A'
  } = {}) {
    let arrErrors = []
    if (!intCategoryId) arrErrors.push('KEY_MISSING_PRODUCT_CATEGORY_ID')
    if (!intSubCategoryId) arrErrors.push('KEY_MISSING_PRODUCT_SUB_CATEGORY_ID')
    if (!intProductPk) if (!files) arrErrors.push('KEY_MISSING_PRODUCT_MEDIA')
    if (!strProductName) arrErrors.push('KEY_MISSING_PRODUCT_NAME')
    if (!strProductDescription)
      arrErrors.push('KEY_MISSING_PRODUCT_DESCRIPTION')
    if (!strProductPrice) arrErrors.push('KEY_MISSING_PRODUCT_PRICE')
    if (!strShippingDays) arrErrors.push('KEY_MISSING_SHIPPING_DAYS')
    if (!chrStatus) arrErrors.push('KEY_MISSING_PRODUCT_STATUS')
    if (arrErrors[0]) throw new Error(arrErrors)
    return Object.freeze({
      getCategoryId: () => intCategoryId,
      getFiles: () => files,
      getSubCategoryId: () => intSubCategoryId,
      getProductName: () => strProductName.trim(),
      getProductDescription: () => strProductDescription.trim(),
      getProductColour: () => strProductColourId,
      getProductPrice: () => strProductPrice.trim(),
      getProductSize: () => strProductSizeId,
      getShippingDays: () => strShippingDays.trim(),
      getWarrantyGuarantee: () => blnWarrantyGuarantee,
      getFeatured: () => blnFeatured,
      getTopSelling: () => blnTopSelling,
      getTax: () => blnTax,
      getShippingCharges: () => blnShippingCharges,
      getStatus: () => chrStatus
    })
  }
}
