import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all productSubCategory to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getProductSubCategory,
  *     createProductSubCategory,
  *     updateProductSubCategory,
  *     deleteProductSubCategory
  *   }
  */

export default function getProductSubCategoryDb({ objQuery }) {
  return Object.freeze({
    getProductSubCategory,
    createProductSubCategory,
    updateProductSubCategory,
    deleteProductSubCategory
  })
  /*
  FUNCTION USE
   * all productSubCategory from DB
  request
   * {}
  response
   * productSubCategory list like this
   * {
   *  "productSubCategoryList":[{
   *  "intProductSubCategoryPk": INTEGER,
   *  "strProductSubCategoryName":STRING,
   * }]
   * }
  */
  async function getProductSubCategory({ intCategoryId }) {
    try {
      if (intCategoryId) {
        let strSingleUserCondition = `WHERE fk_int_product_category_id = '${intCategoryId}'`
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryProductSubCategory.replace(
              '{ WHERE_CONDITION }',
              strSingleUserCondition
            ),
            (err, results) => {
              if (err) {
                reject(new Error(err.message))
              }
              resolve(results)
            }
          )
        })
        return response['rows'][0]
          ? response['rows']
          : { message: 'NO_SUB_CATEGORY_UNDER_THIS_CATEGORY_ID' }
      } else {
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryProductSubCategory.replace(
              '{ WHERE_CONDITION }',
              ''
            ),
            (err, results) => {
              if (err) reject(new Error(err.message))
              resolve(results)
            }
          )
        })
        return response['rows']
      }
    } catch (error) {
      console.log(error.message)
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for create productSubCategory.We get query from params.this return a success message to useCases
    request
     * {
     * strProductSubCategoryName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "PRODUCT_SUB_CATEGORY_ALREADY_EXIST" }
    */
  async function createProductSubCategory({
    intCategoryId,
    strProductSubCategoryName = ''
  }) {
    try {
      let productSubCategoryListResponse = { message: 'successfully created' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.createQuery.createQueryProductSubCategory,
          [intCategoryId, strProductSubCategoryName, 'NOW()'],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return productSubCategoryListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          throw new Error('PRODUCT_SUB_CATEGORY_ALREADY_EXIST')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for update productSubCategory.We get query from params.this return a success message to useCases
    request
     * {
     *    intProductSubCategoryPk    : INTEGER
     *    strProductSubCategoryName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "PRODUCT_SUB_CATEGORY_ALREADY_EXIST" }

    */
  async function updateProductSubCategory({
    intProductSubCategoryPk = 0,
    intCategoryId,
    strProductSubCategoryName = ''
  }) {
    try {
      let strDuplicateValues = `pk_int_product_sub_category_id = ${intProductSubCategoryPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryProductSubCategory.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_PRODUCT_SUB_CATEGORY_PK')
      let productSubCategoryListResponse = { message: 'successfully Updated' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.updateQuery.updateQueryProductSubCategory,
          [
            intCategoryId,
            strProductSubCategoryName,
            'NOW()',
            intProductSubCategoryPk
          ],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return productSubCategoryListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          throw new Error('PRODUCT_SUB_CATEGORY_ALREADY_EXIST')
        }
        if (error.message == 'INVALID_PRODUCT_SUB_CATEGORY_PK');
        {
          throw new Error('INVALID_PRODUCT_SUB_CATEGORY_PK')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for delete productSubCategory.We get query from params.this return a success message to useCases
    request
     * {
     *    intProductSubCategoryPk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_PRODUCT_SUB_CATEGORY_PK" }
    */
  async function deleteProductSubCategory({ intProductSubCategoryPk = 0 }) {
    try {
      let strDuplicateValues = `pk_int_product_sub_category_id = ${intProductSubCategoryPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryProductSubCategory.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_PRODUCT_SUB_CATEGORY_PK')
      let productSubCategoryListResponse = { message: 'successfully deleted' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.deleteQuery.deleteQueryProductSubCategory.replace(
            '{PK_STRINGS}',
            `(${intProductSubCategoryPk})`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return productSubCategoryListResponse
    } catch (error) {
      if (error.message) {
        if (error.message === 'INVALID_PRODUCT_SUB_CATEGORY_PK') {
          throw new Error('INVALID_PRODUCT_SUB_CATEGORY_PK')
        }
      }
    }
  }
}
