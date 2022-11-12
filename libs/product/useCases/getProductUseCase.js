/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { productDB }
    response
     * based the response of functions
    */
export default function getProductListUseCaseFunction({ productDB }) {
  return async function getProductList({
    intCategoryId = '',
    intSubCategoryId = '',
    intProductPk = ''
  }) {
    let productList = await productDB.getProduct({
      intCategoryId,
      intSubCategoryId,
      intProductPk
    })
    return productList
  }
}
