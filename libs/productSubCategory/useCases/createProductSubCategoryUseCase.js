/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { productSubCategoryDB, productSubCategoryEntity }
    response
     * based the response of functions
    */

export default function createProductSubCategoryUseCaseFunction({
  productSubCategoryDB,
  productSubCategoryEntity
}) {
  return async function createProductSubCategory({
    intCategoryId = 0,
    strProductSubCategoryName = ''
  } = {}) {
    const objValidatedProductSubCategory = await productSubCategoryEntity({
      intCategoryId,
      strProductSubCategoryName
    })
    let productSubCategoryList =
      await productSubCategoryDB.createProductSubCategory({
        intCategoryId: objValidatedProductSubCategory.getCategoryId(),
        strProductSubCategoryName:
          objValidatedProductSubCategory.getProductSubCategoryName()
      })
    return productSubCategoryList
  }
}
