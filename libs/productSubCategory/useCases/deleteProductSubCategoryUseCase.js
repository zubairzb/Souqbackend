/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { productSubCategoryDB }
    response
     * based the response of functions
    */
export default function deleteProductSubCategoryUseCaseFunction({
  productSubCategoryDB
}) {
  return async function deleteProductSubCategory({
    intProductSubCategoryPk = 0
  } = {}) {
    if (!intProductSubCategoryPk) {
      throw new Error('KEY_MISSING_PRODUCT_SUB_CATEGORY_PK')
    }
    let productSubCategoryList =
      await productSubCategoryDB.deleteProductSubCategory({
        intProductSubCategoryPk: intProductSubCategoryPk
      })
    return productSubCategoryList
  }
}
