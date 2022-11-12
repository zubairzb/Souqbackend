/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { productSubCategoryDB }
    response
     * based the response of functions
    */
export default function getProductSubCategoryListUseCaseFunction({
  productSubCategoryDB
}) {
  return async function getProductSubCategoryList({ intCategoryId }) {
    let productSubCategoryList =
      await productSubCategoryDB.getProductSubCategory({ intCategoryId })
    return productSubCategoryList
  }
}
