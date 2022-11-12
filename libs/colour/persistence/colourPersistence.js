import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all colour to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getAllColour,
  *     createColour,
  *     updateColour,
  *     deleteColour
  *   }
  */

export default function getColourDb({ objQuery }) {
  return Object.freeze({
    getAllColour,
    createColour,
    updateColour,
    deleteColour
  })
  /*
  FUNCTION USE
   * all colour from DB
  request
   * {}
  response
   * colour list like this
   * {
   *  "objColourList":[{
   *  "intColourPk": INTEGER,
   *  "strColourName":STRING,
   * }]
   * }
  */
  async function getAllColour(requestsParam) {
    try {
      const response = await pgConnection.query(
        objQuery.getQuery.getQueryColour
      )
      return response['rows']
    } catch (error) {
      console.log('error', error)
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for create colour.We get query from params.this return a success message to useCases
    request
     * {
     * strColourName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "COLOUR_ALREADY_EXIST" }
    */
  async function createColour({ strColourName = '' }) {
    try {
      let objColourListResponse = { message: 'successfully created' }
      await pgConnection.query(objQuery.createQuery.createQueryColour, [
        strColourName,
        'NOW()'
      ])
      return objColourListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          const response = await pgConnection.query(
            objQuery.getQuery.duplicateCheckQueryColour,
            [strColourName.toUpperCase()]
          )
          if (
            response['rows'][0]['strColourName'].toUpperCase() ==
            strColourName.toUpperCase()
          )
            throw new Error('COLOUR_ALREADY_EXIST')
        }
      }
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for update colour.We get query from params.this return a success message to useCases
    request
     * {
     *    intColourPk    : INTEGER
     *    strColourName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "COLOUR_ALREADY_EXIST" }

    */
  async function updateColour({ intColourPk = 0, strColourName = '' }) {
    try {
      const res = await pgConnection.query(
        objQuery.getQuery.updateCheckQueryColour,
        [intColourPk]
      )
      if (!res['rows'][0]) throw new Error('INVALID_COLOUR_PK')

      let objColourListResponse = { message: 'successfully Updated' }
      await pgConnection.query(objQuery.updateQuery.updateQueryColour, [
        strColourName,
        'NOW()',
        intColourPk
      ])
      return objColourListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          const response = await pgConnection.query(
            objQuery.getQuery.duplicateCheckQueryColour,
            [strColourName.toUpperCase()]
          )
          if (
            response['rows'][0]['strColourName'].toUpperCase() ==
            strColourName.toUpperCase()
          )
            throw new Error('COLOUR_ALREADY_EXIST')
        }
      }
      if (error.message == 'INVALID_COLOUR_PK')
        throw new Error('INVALID_COLOUR_PK')
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for delete colour.We get query from params.this return a success message to useCases
    request
     * {
     *    intColourPk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_COLOUR_PK" }
    */
  async function deleteColour({ intColourPk = 0, strReason = '' }) {
    try {
      const res = await pgConnection.query(
        objQuery.getQuery.updateCheckQueryColour,
        [intColourPk]
      )
      if (!res['rows'][0]) throw new Error('INVALID_COLOUR_PK')
      let objColourListResponse = { message: 'successfully deleted' }
      await pgConnection.query(objQuery.deleteQuery.deleteQueryColour, [
        intColourPk
      ])
      return objColourListResponse
    } catch (error) {
      if (error.message) {
        if (error.message === 'INVALID_COLOUR_PK') {
          throw new Error('INVALID_COLOUR_PK')
        }
      }
    }
  }
}
