import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all product to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getProduct,
  *     createProduct,
  *     updateProduct,
  *     deleteProduct
  *   }
  */

export default function getProductDb({ objQuery, fs }) {
  return Object.freeze({
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
  })
  /*
  FUNCTION USE
   * all product from DB
  request
   * {}
  response
   * product list like this
   * {
   *  "productList":[{
   *  "intProductPk": INTEGER,
   *  "strProductName":STRING,
   * }]
   * }
  */
  async function getProduct({
    intCategoryId = '',
    intSubCategoryId = '',
    intProductPk = ''
  }) {
    try {
      let strWhereCondition = ``
      if (intCategoryId || intSubCategoryId || intProductPk) {
        if (intCategoryId && intSubCategoryId) {
          strWhereCondition = `WHERE product.fk_int_product_category_id = '${intCategoryId}' AND product.fk_int_product_sub_category_id = '${intSubCategoryId}'`
        } else if (intCategoryId) {
          strWhereCondition = `WHERE product.fk_int_product_category_id = '${intCategoryId}'`
        } else if (intSubCategoryId) {
          strWhereCondition = `WHERE product.fk_int_product_category_id = '${intSubCategoryId}'`
        } else if (intProductPk) {
          strWhereCondition = `WHERE product.pk_int_product_id = '${intProductPk}'`
        }
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryProduct.replace(
              '{ WHERE_CONDITION }',
              strWhereCondition
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
          : { message: 'NO_UNDER_THIS_CATEGORY_ID' }
      } else {
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryProduct.replace(
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
     * this function for create product.We get query from params.this return a success message to useCases
    request
     * {
     * strProductName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "PRODUCT_ALREADY_EXIST" }
    */
  async function createProduct({
    intCategoryId = 0,
    arrFiles,
    intSubCategoryId = 0,
    strProductName = '',
    strProductDescription = '',
    strProductColourId = '',
    strProductPrice = '',
    strProductSizeId = '',
    strShippingDays = '',
    blnWarrantyGuarantee = true,
    blnFeatured = false,
    blnTopSelling = false,
    blnTax = false,
    blnShippingCharges = false,
    chrStatus = 'A'
  }) {
    try {
      let productListResponse = { message: 'successfully created' }
      await pgConnection.query('BEGIN')
      let objUserDetails = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.createQuery.createQueryProduct,
          [
            intCategoryId,
            intSubCategoryId,
            strProductName,
            strProductDescription,
            strProductColourId ? strProductColourId : null,
            strProductPrice,
            strProductSizeId ? strProductSizeId : null,
            strShippingDays,
            blnWarrantyGuarantee,
            blnFeatured,
            blnTopSelling,
            blnTax,
            blnShippingCharges,
            chrStatus,
            'NOW()'
          ],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      let intProductPk = objUserDetails['rows'][0]['intProductPk']
      let strProductMediaValues = ''
      arrFiles.forEach((element) => {
        strProductMediaValues += `('${intProductPk}','${element.filename}','${
          element.path
        }','${element.mimetype === 'video/mp4' ? 'V' : 'I'}','NOW()'),`
      })
      strProductMediaValues = strProductMediaValues.slice(0, -1)
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.createQuery.createProductMedia.replace(
            '{ VALUES }',
            strProductMediaValues
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      await pgConnection.query('COMMIT')
      return productListResponse
    } catch (error) {
      console.log(error.message)
      await pgConnection.query('ROLLBACK')
      if (arrFiles[0]) {
        arrFiles.forEach((element) => {
          const path = `${element['path']}`
          fs.unlink(path, (err) => {
            if (err) {
              console.error(err)
              return
            }
          })
        })
      }
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          throw new Error('PRODUCT_ALREADY_EXIST')
        }
      }
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for update product.We get query from params.this return a success message to useCases
    request
     * {
     *    intProductPk    : INTEGER
     *    strProductName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "PRODUCT_ALREADY_EXIST" }

    */
  async function updateProduct({
    intProductPk = 0,
    intCategoryId = 0,
    arrFiles,
    intSubCategoryId = 0,
    strProductName = '',
    strProductDescription = '',
    strProductColourId = '',
    strProductPrice = '',
    strProductSizeId = '',
    strShippingDays = '',
    blnWarrantyGuarantee = true,
    blnFeatured = false,
    blnTopSelling = false,
    blnTax = false,
    blnShippingCharges = false,
    chrStatus = 'A'
  }) {
    try {
      let strDuplicateValues = `pk_int_product_id = ${intProductPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryProduct.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_PRODUCT_PK')
      let productListResponse = { message: 'successfully Updated' }
      await pgConnection.query('BEGIN')
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.updateQuery.updateQueryProduct,
          [
            intCategoryId,
            intSubCategoryId,
            strProductName,
            strProductDescription,
            strProductColourId ? strProductColourId : null,
            strProductPrice,
            strProductSizeId ? strProductSizeId : null,
            strShippingDays,
            blnWarrantyGuarantee,
            blnFeatured,
            blnTopSelling,
            blnTax,
            blnShippingCharges,
            chrStatus,
            'NOW()',
            intProductPk
          ],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      if (arrFiles) {
        let objDeletedDetails = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.deleteQuery.deleteQueryProductMedia.replace(
              '{PK_STRINGS}',
              `(${intProductPk})`
            ),
            (err, results) => {
              if (err) {
                reject(new Error(err.message))
              }
              resolve(results)
            }
          )
        })
        let arrPathsToDelete = objDeletedDetails['rows']
        if (arrPathsToDelete[0]) {
          arrPathsToDelete.forEach((element) => {
            const path = `${element['strMediaPath']}`
            fs.unlink(path, (err) => {
              if (err) {
                console.error(err)
                return
              }
            })
          })
        }
        let strProductMediaValues = ''
        arrFiles.forEach((element) => {
          strProductMediaValues += `('${intProductPk}','${element.filename}','${
            element.path
          }','${element.mimetype === 'video/mp4' ? 'V' : 'I'}','NOW()'),`
        })
        strProductMediaValues = strProductMediaValues.slice(0, -1)
        await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.createQuery.createProductMedia.replace(
              '{ VALUES }',
              strProductMediaValues
            ),
            (err, results) => {
              if (err) {
                reject(new Error(err.message))
              }
              resolve(results)
            }
          )
        })
      }

      await pgConnection.query('COMMIT')
      return productListResponse
    } catch (error) {
      console.log(error.message)
      await pgConnection.query('ROLLBACK')
      if (arrFiles !== []) {
        arrFiles.forEach((element) => {
          const path = `${element['path']}`
          fs.unlink(path, (err) => {
            if (err) {
              console.error(err)
              return
            }
          })
        })
      }
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          throw new Error('PRODUCT_ALREADY_EXIST')
        }
        if (error.message == 'INVALID_PRODUCT_PK');
        {
          throw new Error('INVALID_PRODUCT_PK')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for delete product.We get query from params.this return a success message to useCases
    request
     * {
     *    intProductPk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_PRODUCT_PK" }
    */
  async function deleteProduct({ intProductPk = 0 }) {
    try {
      let strDuplicateValues = `pk_int_product_id = ${intProductPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryProduct.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_PRODUCT_PK')
      let intSelectId = res['rows'][0]['intProductPk']
      let objPathsToDelete = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.getQueryMediaDetails.replace(
            '{ ID }',
            `${intSelectId}`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      let arrPathsToDelete = objPathsToDelete['rows']
      if (arrPathsToDelete[0]) {
        arrPathsToDelete.forEach((element) => {
          const path = `${element['strMediaPath']}`
          fs.unlink(path, (err) => {
            if (err) {
              console.error(err)
              return
            }
          })
        })
      }
      let productListResponse = { message: 'successfully deleted' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.deleteQuery.deleteQueryProduct.replace(
            '{PK_STRINGS}',
            `(${intProductPk})`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })

      return productListResponse
    } catch (error) {
      if (error.message) {
        console.log(error.message)
        if (error.message === 'INVALID_PRODUCT_PK') {
          throw new Error('INVALID_PRODUCT_PK')
        }
      }
    }
  }
}
