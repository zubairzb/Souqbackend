/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { productDB }
    response
     * based the response of functions
    */
export default function deleteProductUseCaseFunction({ productDB }) {
  return async function deleteProduct({ intProductPk = 0 } = {}) {
    if (!intProductPk) {
      throw new Error('KEY_MISSING_PRODUCT_PK')
    }
    let productList = await productDB.deleteProduct({
      intProductPk: intProductPk
    })
    return productList
  }
}
