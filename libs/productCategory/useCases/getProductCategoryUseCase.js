/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { productCategoryDB }
    response
     * based the response of functions
    */
export default function getProductCategoryListUseCaseFunction({
  productCategoryDB
}) {
  return async function getProductCategoryList() {
    let productCategoryList = await productCategoryDB.getProductCategory()
    return productCategoryList
  }
}
