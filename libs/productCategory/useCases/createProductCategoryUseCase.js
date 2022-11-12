/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { productCategoryDB, productCategoryEntity }
    response
     * based the response of functions
    */

export default function createProductCategoryUseCaseFunction({
  productCategoryDB,
  productCategoryEntity
}) {
  return async function createProductCategory({
    strProductCategoryName = ''
  } = {}) {
    const objValidatedProductCategory = await productCategoryEntity({
      strProductCategoryName
    })
    let productCategoryList = await productCategoryDB.createProductCategory({
      strProductCategoryName:
        objValidatedProductCategory.getProductCategoryName()
    })
    return productCategoryList
  }
}
