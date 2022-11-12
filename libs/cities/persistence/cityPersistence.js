import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all cities to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getCities,
  *     createCity,
  *     updateCity,
  *     deleteCity
  *   }
  */

export default function getCitiesDb({ objQuery }) {
  return Object.freeze({
    getCities,
    createCity,
    updateCity,
    deleteCity
  })
  /*
  FUNCTION USE
   * all cities from DB
  request
   * {}
  response
   * cities list like this
   * {
   *  "citiesList":[{
   *  "intCityPk": INTEGER,
   *  "strCityName":STRING,
   * }]
   * }
  */
  async function getCities({ intStateId }) {
    try {
      if (intStateId) {
        let strSingleUserCondition = `WHERE fk_int_state_id = '${intStateId}'`
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryCities.replace(
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
          : { message: 'NO_CITIES_UNDER_THIS_STATE' }
      } else {
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryCities.replace('{ WHERE_CONDITION }', ''),
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
     * this function for create cities.We get query from params.this return a success message to useCases
    request
     * {
     * strCityName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "CITY_ALREADY_EXIST" }
    */
  async function createCity({ intStateId = 0, strCityName = '' }) {
    try {
      let cityListResponse = { message: 'successfully created' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.createQuery.createQueryCity,
          [intStateId, strCityName, 'NOW()'],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return cityListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          let strDuplicateValues = `vchr_city_name = '${strCityName}'`
          const response = await new Promise((resolve, reject) => {
            pgConnection.query(
              objQuery.getQuery.duplicateCheckQueryCity.replace(
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
          if (
            response['rows'][0].strCityName.toUpperCase() ==
            strCityName.toUpperCase()
          )
            throw new Error('CITY_ALREADY_EXIST')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for update cities.We get query from params.this return a success message to useCases
    request
     * {
     *    intCityPk    : INTEGER
     *    strCityName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "CITY_ALREADY_EXIST" }

    */
  async function updateCity({
    intCityPk = 0,
    intStateId = 0,
    strCityName = ''
  }) {
    try {
      let strDuplicateValues = `pk_int_city_id = ${intCityPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryCity.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_CITY_PK')
      let cityListResponse = { message: 'successfully Updated' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.updateQuery.updateQueryCity,
          [intStateId, strCityName, 'NOW()', intCityPk],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return cityListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          let strDuplicateValues = `vchr_city_name = '${strCityName}'`
          const response = await new Promise((resolve, reject) => {
            pgConnection.query(
              objQuery.getQuery.duplicateCheckQueryCity.replace(
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
          if (
            response[0].strCityName.toUpperCase() == strCityName.toUpperCase()
          )
            throw new Error('CITY_ALREADY_EXIST')
        }
        if (error.message == 'INVALID_CITY_PK');
        {
          throw new Error('INVALID_CITY_PK')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for delete cities.We get query from params.this return a success message to useCases
    request
     * {
     *    intCityPk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_CITY_PK" }
    */
  async function deleteCity({ intCityPk = 0, strReason = '' }) {
    try {
      let strDuplicateValues = `pk_int_city_id = ${intCityPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryCity.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_CITY_PK')
      let cityListResponse = { message: 'successfully deleted' }
      const response = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.deleteQuery.deleteQueryCity.replace(
            '{PK_STRINGS}',
            `(${intCityPk})`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return cityListResponse
    } catch (error) {
      if (error.message) {
        if (error.message === 'INVALID_CITY_PK') {
          throw new Error('INVALID_CITY_PK')
        }
      }
    }
  }
}
