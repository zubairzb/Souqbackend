import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all dashBoardMedia to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getDashBoardMedia,
  *     createDashBoardMedia,
  *     updateDashBoardMedia,
  *     deleteDashBoardMedia
  *   }
  */

export default function getDashBoardMediaDb({ objQuery, fs }) {
  return Object.freeze({
    getDashBoardMedia,
    createDashBoardMedia,
    updateDashBoardMedia,
    deleteDashBoardMedia
  })
  /*
  FUNCTION USE
   * all dashBoardMedia from DB
  request
   * {}
  response
   * dashBoardMedia list like this
   * {
   *  "dashBoardMediaList":[{
   *  "intDashBoardMediaPk": INTEGER,
   *  "strDashBoardMediaName":STRING,
   * }]
   * }
  */
  async function getDashBoardMedia({ intProductId = '' }) {
    try {
      let strWhereCondition = ``
      if (intProductId) {
        strWhereCondition = `WHERE fk_int_product_id = '${intProductId}'`
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryDashBoardMedia.replace(
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
          : { message: 'NO_UNDER_THIS_PRODUCT_ID' }
      } else {
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryDashBoardMedia.replace(
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
     * this function for create dashBoardMedia.We get query from params.this return a success message to useCases
    request
     * {
     * strDashBoardMediaName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "DASH_BOARD_MEDIA_ALREADY_EXIST" }
    */
  async function createDashBoardMedia({
    objDashBoardMedias,
    intProductId = 0
  }) {
    try {
      let objPaths = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.getQueryProductDetails.replace(
            '{ ID }',
            `${intProductId}`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      if (!objPaths['rows'][0]) throw new Error('INVALID_PRODUCT_PK')
      let countFinder = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.getCountOfMedias,
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      let intImageCount = 0
      let intVideoCount = 0
      countFinder['rows'].forEach((element) => {
        if (element['chr_type'] === 'V')
          intVideoCount = parseInt(element['count'])
        if (element['chr_type'] === 'I')
          intImageCount = parseInt(element['count'])
      })
      let dashBoardMediaListResponse = { message: 'successfully created' }
      let intVideoCountReq = 0
      let intImageCountReq = 0
      let strDashBoardMediaMediaValues = ''
      strDashBoardMediaMediaValues += `('${intProductId}','${
        objDashBoardMedias.filename
      }','${objDashBoardMedias.path}','${
        objDashBoardMedias.mimetype === 'video/mp4' ? 'V' : 'I'
      }','NOW()'),`
      objDashBoardMedias.mimetype === 'video/mp4'
        ? (intVideoCountReq += 1)
        : (intImageCountReq += 1)
      if (objDashBoardMedias.mimetype === 'video/mp4') {
        if (intVideoCount + intVideoCountReq >= 4)
          throw new Error('MAXIMUM_DASHBOARD_VIDEOS_EXCEED')
      } else {
        if (intImageCount + intImageCountReq >= 3)
          throw new Error('MAXIMUM_DASHBOARD_IMAGE_EXCEED')
      }
      strDashBoardMediaMediaValues = strDashBoardMediaMediaValues.slice(0, -1)
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.createQuery.createDashBoardMediaMedia.replace(
            '{ VALUES }',
            strDashBoardMediaMediaValues
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return dashBoardMediaListResponse
    } catch (error) {
      console.log(error.message)
      if (objDashBoardMedias) {
        const path = `${objDashBoardMedias['path']}`
        fs.unlink(path, (err) => {
          if (err) {
            console.error(err)
            return
          }
        })
      }
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate')
          throw new Error('DASH_BOARD_MEDIA_ALREADY_EXIST')
        else if (error.message === 'INVALID_PRODUCT_PK')
          throw new Error('INVALID_PRODUCT_PK')
        else throw new Error(error.message)
      }
    }
  }
  /*
    FUNCTION USE
     * this function for update dashBoardMedia.We get query from params.this return a success message to useCases
    request
     * {
     *    intDashBoardMediaPk    : INTEGER
     *    strDashBoardMediaName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "DASH_BOARD_MEDIA_ALREADY_EXIST" }

    */
  async function updateDashBoardMedia({
    intDashBoardMediaPk = 0,
    objDashBoardMedias,
    intProductId = 0
  }) {
    try {
      let strDuplicateValues = `pk_int_dashboard_media_id = ${intDashBoardMediaPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryDashBoardMedia.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_DASH_BOARD_MEDIA_PK')

      let dashBoardMediaListResponse = { message: 'successfully Updated' }
      await pgConnection.query('BEGIN')
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.updateQuery.updateQueryDashBoardMedia,
          [
            intProductId,
            objDashBoardMedias[0]['filename'],
            objDashBoardMedias[0]['path'],
            objDashBoardMedias[0]['mimetype'] === 'video/mp4' ? 'V' : 'I',
            'NOW()',
            intDashBoardMediaPk
          ],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      await pgConnection.query('COMMIT')
      return dashBoardMediaListResponse
    } catch (error) {
      console.log(error.message)
      await pgConnection.query('ROLLBACK')
      if (objDashBoardMedias[0]) {
        objDashBoardMedias.forEach((element) => {
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
          throw new Error('DASH_BOARD_MEDIA_ALREADY_EXIST')
        }
        if (error.message == 'INVALID_DASH_BOARD_MEDIA_PK');
        {
          throw new Error('INVALID_DASH_BOARD_MEDIA_PK')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for delete dashBoardMedia.We get query from params.this return a success message to useCases
    request
     * {
     *    intDashBoardMediaPk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_DASH_BOARD_MEDIA_PK" }
    */
  async function deleteDashBoardMedia({ intDashBoardMediaPk = 0 }) {
    try {
      let strDuplicateValues = `pk_int_dashboard_media_id = ${intDashBoardMediaPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryDashBoardMedia.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_DASH_BOARD_MEDIA_PK')
      let dashBoardMediaListResponse = { message: 'successfully deleted' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.deleteQuery.deleteQueryDashBoardMedia.replace(
            '{PK_STRINGS}',
            `(${intDashBoardMediaPk})`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })

      return dashBoardMediaListResponse
    } catch (error) {
      if (error.message) {
        console.log(error.message)
        if (error.message === 'INVALID_DASH_BOARD_MEDIA_PK') {
          throw new Error('INVALID_DASH_BOARD_MEDIA_PK')
        }
      }
    }
  }
}
