import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all productCategory to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getProductCategory,
  *     createProductCategory,
  *     updateProductCategory,
  *     deleteProductCategory
  *   }
  */

export default function getProductCategoryDb({ objQuery }) {
  return Object.freeze({
    getProductCategory,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
  })
  /*
  FUNCTION USE
   * all productCategory from DB
  request
   * {}
  response
   * productCategory list like this
   * {
   *  "productCategoryList":[{
   *  "intProductCategoryPk": INTEGER,
   *  "strProductCategoryName":STRING,
   * }]
   * }
  */
  async function getProductCategory() {
    try {
      const response = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.getQueryProductCategory,
          (err, results) => {
            if (err) reject(new Error(err.message))
            resolve(results)
          }
        )
      })

      return response['rows']
    } catch (error) {
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for create productCategory.We get query from params.this return a success message to useCases
    request
     * {
     * strProductCategoryName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "PRODUCT_CATEGORY_ALREADY_EXIST" }
    */
  async function createProductCategory({ strProductCategoryName = '' }) {
    try {
      let productCategoryListResponse = { message: 'successfully created' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.createQuery.createQueryProductCategory,
          [strProductCategoryName, 'NOW()'],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return productCategoryListResponse
    } catch (error) {
      console.log(error.message)
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          throw new Error('PRODUCT_CATEGORY_ALREADY_EXIST')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for update productCategory.We get query from params.this return a success message to useCases
    request
     * {
     *    intProductCategoryPk    : INTEGER
     *    strProductCategoryName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "PRODUCT_CATEGORY_ALREADY_EXIST" }

    */
  async function updateProductCategory({
    intProductCategoryPk = 0,
    strProductCategoryName = ''
  }) {
    try {
      let strDuplicateValues = `pk_int_product_category_id = ${intProductCategoryPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryProductCategory.replace(
            '{ WHERE_CONDITION }',
            strDuplicateValues
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      if (!res['rows'][0]) throw new Error('INVALID_PRODUCT_CATEGORY_PK')
      let productCategoryListResponse = { message: 'successfully Updated' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.updateQuery.updateQueryProductCategory,
          [strProductCategoryName, 'NOW()', intProductCategoryPk],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return productCategoryListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          throw new Error('PRODUCT_CATEGORY_ALREADY_EXIST')
        }
        if (error.message == 'INVALID_PRODUCT_CATEGORY_PK');
        {
          throw new Error('INVALID_PRODUCT_CATEGORY_PK')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for delete productCategory.We get query from params.this return a success message to useCases
    request
     * {
     *    intProductCategoryPk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_PRODUCT_CATEGORY_PK" }
    */
  async function deleteProductCategory({ intProductCategoryPk = 0 }) {
    try {
      let strDuplicateValues = `pk_int_product_category_id = ${intProductCategoryPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryProductCategory.replace(
            '{ WHERE_CONDITION }',
            strDuplicateValues
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      if (!res['rows'][0]) throw new Error('INVALID_PRODUCT_CATEGORY_PK')
      let productCategoryListResponse = { message: 'successfully deleted' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.deleteQuery.deleteQueryProductCategory.replace(
            '{PK_STRINGS}',
            `(${intProductCategoryPk})`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return productCategoryListResponse
    } catch (error) {
      if (error.message) {
        if (error.message === 'INVALID_PRODUCT_CATEGORY_PK') {
          throw new Error('INVALID_PRODUCT_CATEGORY_PK')
        }
      }
    }
  }
}
