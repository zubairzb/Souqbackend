import pgConnection from '../../../helpers/functions/connection'

/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions .We get query from params.this return all states to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getStates,
  *     createState,
  *     updateState,
  *     deleteState
  *   }
  */

export default function getStatesDb({ objQuery }) {
  return Object.freeze({
    getStates,
    createState,
    updateState,
    deleteState
  })
  /*
  FUNCTION USE
   * all states from DB
  request
   * {}
  response
   * states list like this
   * {
   *  "statesList":[{
   *  "intStatePk": INTEGER,
   *  "strStateName":STRING,
   * }]
   * }
  */
  async function getStates({ intCountryId }) {
    try {
      if (intCountryId) {
        let strSingleUserCondition = `WHERE fk_int_country_id = '${intCountryId}'`
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryStates.replace(
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
          : { message: 'NO_STATES_UNDER_THIS_COUNTRY' }
      } else {
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryStates.replace('{ WHERE_CONDITION }', ''),
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
     * this function for create states.We get query from params.this return a success message to useCases
    request
     * {
     * strStateName : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "STATE_ALREADY_EXIST" }
    */
  async function createState({ intCountryId = 0, strStateName = '' }) {
    try {
      let stateListResponse = { message: 'successfully created' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.createQuery.createQueryState,
          [intCountryId, strStateName, 'NOW()'],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return stateListResponse
    } catch (error) {
      console.log(error.message)
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          let strDuplicateValues = `vchr_state_name = '${strStateName}'`
          const response = await new Promise((resolve, reject) => {
            pgConnection.query(
              objQuery.getQuery.duplicateCheckQueryState.replace(
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
            response['rows'][0].strStateName.toUpperCase() ==
            strStateName.toUpperCase()
          )
            throw new Error('STATE_ALREADY_EXIST')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for update states.We get query from params.this return a success message to useCases
    request
     * {
     *    intStatePk    : INTEGER
     *    strStateName : STRING

     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "STATE_ALREADY_EXIST" }

    */
  async function updateState({
    intStatePk = 0,
    intCountryId = 0,
    strStateName = ''
  }) {
    try {
      let strDuplicateValues = `pk_int_state_id = ${intStatePk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryState.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_STATE_PK')
      let stateListResponse = { message: 'successfully Updated' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.updateQuery.updateQueryState,
          [intCountryId, strStateName, 'NOW()', intStatePk],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return stateListResponse
    } catch (error) {
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          let strDuplicateValues = `vchr_state_name = '${strStateName}'`
          const response = await new Promise((resolve, reject) => {
            pgConnection.query(
              objQuery.getQuery.duplicateCheckQueryState.replace(
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
            response[0].strStateName.toUpperCase() == strStateName.toUpperCase()
          )
            throw new Error('STATE_ALREADY_EXIST')
        }
        if (error.message == 'INVALID_STATE_PK');
        {
          throw new Error('INVALID_STATE_PK')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for delete states.We get query from params.this return a success message to useCases
    request
     * {
     *    intStatePk    : NUMBER,
     *    strReason   : STRING  // not implemented
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_STATE_PK" }
    */
  async function deleteState({ intStatePk = 0, strReason = '' }) {
    try {
      let strDuplicateValues = `pk_int_state_id = ${intStatePk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryState.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_STATE_PK')
      let stateListResponse = { message: 'successfully deleted' }
      const response = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.deleteQuery.deleteQueryState.replace(
            '{PK_STRINGS}',
            `(${intStatePk})`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return stateListResponse
    } catch (error) {
      if (error.message) {
        if (error.message === 'INVALID_STATE_PK') {
          throw new Error('INVALID_STATE_PK')
        }
      }
    }
  }
}
