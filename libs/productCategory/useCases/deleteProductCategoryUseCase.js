/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { productCategoryDB }
    response
     * based the response of functions
    */
export default function deleteProductCategoryUseCaseFunction({
  productCategoryDB
}) {
  return async function deleteProductCategory({
    intProductCategoryPk = 0
  } = {}) {
    if (!intProductCategoryPk) {
      throw new Error('KEY_MISSING_PRODUCT_CATEGORY_PK')
    }
    let productCategoryList = await productCategoryDB.deleteProductCategory({
      intProductCategoryPk: intProductCategoryPk
    })
    return productCategoryList
  }
}
