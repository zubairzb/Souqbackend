/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { productCategoryDB, productCategoryEntity }
    response
     * based the response of functions
    */
export default function updateProductCategoryUseCaseFunction({
  productCategoryDB,
  productCategoryEntity
}) {
  return async function updateProductCategory({
    intProductCategoryPk = 0,
    strProductCategoryName = ''
  } = {}) {
    if (!intProductCategoryPk) {
      throw new Error('KEY_MISSING_PRODUCT_CATEGORY_PK')
    }
    const objValidatedProductCategory = await productCategoryEntity({
      strProductCategoryName
    })
    let productCategoryList = await productCategoryDB.updateProductCategory({
      intProductCategoryPk: intProductCategoryPk,
      strProductCategoryName:
        objValidatedProductCategory.getProductCategoryName()
    })
    return productCategoryList
  }
}
