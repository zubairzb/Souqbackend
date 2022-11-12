/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { productDB, productEntity }
    response
     * based the response of functions
    */

export default function createProductUseCaseFunction({
  productDB,
  productEntity
}) {
  return async function createProduct({
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
    const objValidatedProduct = await productEntity({
      files,
      intCategoryId,
      intSubCategoryId,
      strProductName,
      strProductDescription,
      strProductColourId,
      strProductPrice,
      strProductSizeId,
      strShippingDays,
      blnWarrantyGuarantee,
      blnFeatured,
      blnTopSelling,
      blnTax,
      blnShippingCharges,
      chrStatus
    })
    let productList = await productDB.createProduct({
      intCategoryId: objValidatedProduct.getCategoryId(),
      arrFiles: objValidatedProduct.getFiles(),
      intSubCategoryId: objValidatedProduct.getSubCategoryId(),
      strProductName: objValidatedProduct.getProductName(),
      strProductDescription: objValidatedProduct.getProductDescription(),
      strProductColourId: objValidatedProduct.getProductColour(),
      strProductPrice: objValidatedProduct.getProductPrice(),
      strProductSizeId: objValidatedProduct.getProductSize(),
      strShippingDays: objValidatedProduct.getShippingDays(),
      blnWarrantyGuarantee: objValidatedProduct.getWarrantyGuarantee(),
      blnFeatured: objValidatedProduct.getFeatured(),
      blnTopSelling: objValidatedProduct.getTopSelling(),
      blnTax: objValidatedProduct.getTax(),
      blnShippingCharges: objValidatedProduct.getShippingCharges(),
      chrStatus: objValidatedProduct.getStatus()
    })
    return productList
  }
}
