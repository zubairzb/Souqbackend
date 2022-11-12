import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all size to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getAllSize,
  *     createSize,
  *     updateSize,
  *     deleteSize
  *   }
  */

export default function getSizeDb({ objQuery }) {
  return Object.freeze({
    getAllSize,
    createSize,
    updateSize,
    deleteSize
  })
  /*
  FUNCTION USE
   * all size from DB
  request
   * {}
  response
   * size list like this
   * {
   *  "objSizeList":[{
   *  "intSizePk": INTEGER,
   *  "strSizeName":STRING,
   * }]
   * }
  */
  async function getAllSize(requestsParam) {
    try {
      const response = await pgConnection.query(objQuery.getQuery.getQuerySize)
      return response['rows']
    } catch (error) {
      console.log(error.message)
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for create size.We get query from params.this return a success message to useCases
    request
     * {
     * strSizeName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "SIZE_ALREADY_EXIST" }
    */
  async function createSize({ strSizeName = '' }) {
    try {
      let objSizeListResponse = { message: 'successfully created' }
      await pgConnection.query(objQuery.createQuery.createQuerySize, [
        strSizeName,
        'NOW()'
      ])
      return objSizeListResponse
    } catch (error) {
      console.log(error.message)
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          const response = await pgConnection.query(
            objQuery.getQuery.duplicateCheckQuerySize,
            [strSizeName.toUpperCase()]
          )
          if (
            response['rows'][0]['strSizeName'].toUpperCase() ==
            strSizeName.toUpperCase()
          )
            throw new Error('SIZE_ALREADY_EXIST')
        }
      }
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for update size.We get query from params.this return a success message to useCases
    request
     * {
     *    intSizePk    : INTEGER
     *    strSizeName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "SIZE_ALREADY_EXIST" }

    */
  async function updateSize({ intSizePk = 0, strSizeName = '' }) {
    try {
      const res = await pgConnection.query(
        objQuery.getQuery.updateCheckQuerySize,
        [intSizePk]
      )
      if (!res['rows'][0]) throw new Error('INVALID_SIZE_PK')

      let objSizeListResponse = { message: 'successfully Updated' }
      await pgConnection.query(objQuery.updateQuery.updateQuerySize, [
        strSizeName,
        'NOW()',
        intSizePk
      ])
      return objSizeListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          const response = await pgConnection.query(
            objQuery.getQuery.duplicateCheckQuerySize,
            [strSizeName.toUpperCase()]
          )
          if (
            response['rows'][0]['strSizeName'].toUpperCase() ==
            strSizeName.toUpperCase()
          )
            throw new Error('SIZE_ALREADY_EXIST')
        }
      }
      if (error.message == 'INVALID_SIZE_PK') throw new Error('INVALID_SIZE_PK')
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for delete size.We get query from params.this return a success message to useCases
    request
     * {
     *    intSizePk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_SIZE_PK" }
    */
  async function deleteSize({ intSizePk = 0, strReason = '' }) {
    try {
      const res = await pgConnection.query(
        objQuery.getQuery.updateCheckQuerySize,
        [intSizePk]
      )
      if (!res['rows'][0]) throw new Error('INVALID_SIZE_PK')
      let objSizeListResponse = { message: 'successfully deleted' }
      await pgConnection.query(objQuery.deleteQuery.deleteQuerySize, [
        intSizePk
      ])
      return objSizeListResponse
    } catch (error) {
      if (error.message) {
        if (error.message === 'INVALID_SIZE_PK') {
          throw new Error('INVALID_SIZE_PK')
        }
      }
    }
  }
}
