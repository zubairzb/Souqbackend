/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { productSubCategoryDB, productSubCategoryEntity }
    response
     * based the response of functions
    */
export default function updateProductSubCategoryUseCaseFunction({
  productSubCategoryDB,
  productSubCategoryEntity
}) {
  return async function updateProductSubCategory({
    intProductSubCategoryPk = 0,
    intCategoryId,
    strProductSubCategoryName = ''
  } = {}) {
    if (!intProductSubCategoryPk) {
      throw new Error('KEY_MISSING_PRODUCT_SUB_CATEGORY_PK')
    }
    const objValidatedProductSubCategory = await productSubCategoryEntity({
      intCategoryId,
      strProductSubCategoryName
    })
    let productSubCategoryList =
      await productSubCategoryDB.updateProductSubCategory({
        intProductSubCategoryPk: intProductSubCategoryPk,
        intCategoryId: objValidatedProductSubCategory.getCategoryId(),
        strProductSubCategoryName:
          objValidatedProductSubCategory.getProductSubCategoryName()
      })
    return productSubCategoryList
  }
}
