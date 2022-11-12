import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all country to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getAllCountry,
  *     createCountry,
  *     updateCountry,
  *     deleteCountry
  *   }
  */

export default function getCountryDb({ objQuery }) {
  return Object.freeze({
    getAllCountry,
    createCountry,
    updateCountry,
    deleteCountry
  })
  /*
  FUNCTION USE
   * all country from DB
  request
   * {}
  response
   * country list like this
   * {
   *  "objCountryList":[{
   *  "intCountryPk": INTEGER,
   *  "strCountryName":STRING,
   * }]
   * }
  */
  async function getAllCountry(requestsParam) {
    try {
      const response = await pgConnection.query(
        objQuery.getQuery.getQueryCountry
      )
      return response['rows']
    } catch (error) {
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for create country.We get query from params.this return a success message to useCases
    request
     * {
     * strCountryName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "COUNTRY_ALREADY_EXIST" }
    */
  async function createCountry({ strCountryName = '' }) {
    try {
      let objCountryListResponse = { message: 'successfully created' }
      await pgConnection.query(objQuery.createQuery.createQueryCountry, [
        strCountryName,
        'NOW()'
      ])
      return objCountryListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          const response = await pgConnection.query(
            objQuery.getQuery.duplicateCheckQueryCountry,
            [strCountryName.toUpperCase()]
          )
          if (
            response['rows'][0]['strCountryName'].toUpperCase() ==
            strCountryName.toUpperCase()
          )
            throw new Error('COUNTRY_ALREADY_EXIST')
        }
      }
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for update country.We get query from params.this return a success message to useCases
    request
     * {
     *    intCountryPk    : INTEGER
     *    strCountryName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "COUNTRY_ALREADY_EXIST" }

    */
  async function updateCountry({ intCountryPk = 0, strCountryName = '' }) {
    try {
      const res = await pgConnection.query(
        objQuery.getQuery.updateCheckQueryCountry,
        [intCountryPk]
      )
      if (!res['rows'][0]) throw new Error('INVALID_COUNTRY_PK')

      let objCountryListResponse = { message: 'successfully Updated' }
      await pgConnection.query(objQuery.updateQuery.updateQueryCountry, [
        strCountryName,
        'NOW()',
        intCountryPk
      ])
      return objCountryListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          const response = await pgConnection.query(
            objQuery.getQuery.duplicateCheckQueryCountry,
            [strCountryName.toUpperCase()]
          )
          if (
            response['rows'][0]['strCountryName'].toUpperCase() ==
            strCountryName.toUpperCase()
          )
            throw new Error('COUNTRY_ALREADY_EXIST')
        }
      }
      if (error.message == 'INVALID_COUNTRY_PK')
        throw new Error('INVALID_COUNTRY_PK')
      throw new Error('SOMETHING_WENT_WRONG')
    }
  }
  /*
    FUNCTION USE
     * this function for delete country.We get query from params.this return a success message to useCases
    request
     * {
     *    intCountryPk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_COUNTRY_PK" }
    */
  async function deleteCountry({ intCountryPk = 0, strReason = '' }) {
    try {
      const res = await pgConnection.query(
        objQuery.getQuery.updateCheckQueryCountry,
        [intCountryPk]
      )
      if (!res['rows'][0]) throw new Error('INVALID_COUNTRY_PK')
      let objCountryListResponse = { message: 'successfully deleted' }
      await pgConnection.query(objQuery.deleteQuery.deleteQueryCountry, [
        intCountryPk
      ])
      return objCountryListResponse
    } catch (error) {
      if (error.message) {
        if (error.message === 'INVALID_COUNTRY_PK') {
          throw new Error('INVALID_COUNTRY_PK')
        }
      }
    }
  }
}
