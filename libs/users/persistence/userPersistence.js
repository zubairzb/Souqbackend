import pgConnection from '../../../helpers/functions/connection'
import bcrypt from 'bcrypt'
/*
  FUNCTION USE 
   * this function handle all db requests based return the freeze object functions.We get query from params.this return all users to useCases 
  request
   * {objQuery}
  response
  * freeze Objects
  *   {
  *     getAllUsers,
  *     createUser,
  *     updateUser,
  *     deleteUser
  *   }
  */

export default function getUsersDb({ objQuery }) {
  return Object.freeze({
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
  })
  /*
  FUNCTION USE
   * all users from DB
   * also we can get single user based on UserPk
  request
   * {}
     OR
   * {"intUserPk"}
  response
   * users list like this
   * {
   *  "usersList":[{
   *  "intUserPk": INTEGER,
   *  "strRole":STRING,
   *  "strUserName": STRING,
   *  "strEmail": STRING,
   *  "strMobile": INTEGER,
   *  "datCreatedDate": DATE,
   *  "datModifiedDate": DATE
   * }]
   * }
  */
  async function getAllUsers({ intUserPk = 0 }) {
    try {
      if (intUserPk) {
        let strSingleUserCondition = `pk_int_user_id = '${intUserPk}'`
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryUsers.replace(
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
          ? response['rows'][0]
          : { message: 'USER_NOT_EXIST' }
      } else {
        let strUsersCondition = `chr_user_type != 'A'`
        const response = await new Promise((resolve, reject) => {
          pgConnection.query(
            objQuery.getQuery.getQueryUsers.replace(
              '{ WHERE_CONDITION }',
              strUsersCondition
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
      console.log(error)
    }
  }
  /*
    FUNCTION USE
     * this function for create users.We get query from params.this return a success message to useCases
    request
     * {
     * strUserName  : STRING,
     * strPassword  : STRING,
     * strEmail     : STRING
     * strMobile    : STRING
     * }
    response
     * { message: "successfully created" }
    response(Error)
     * { error: "EMAIL_ALREADY_EXIST" }
     * { error: "MOBILE_ALREADY_EXIST" }
    */
  async function createUser({
    strUserName = '',
    strAddress = '',
    strEmail = '',
    strMobile = '',
    strPassword = '',
    strWhatsAppMobile = '',
    chrUserType,
    chrStatus
  }) {
    try {
      // Iam using bcrypt npm module for hashing password. for more https://www.npmjs.com/package/bcrypt
      const hashedPassword = await bcrypt.hash(strPassword, 10)
      await pgConnection.query(objQuery.createQuery.createQueryUser, [
        strUserName,
        strAddress,
        strEmail,
        strMobile,
        strWhatsAppMobile,
        hashedPassword,
        chrUserType,
        chrStatus,
        'NOW()'
      ])
      return { message: 'successfully created' }
    } catch (error) {
      console.log(error.message)
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          let strDuplicateValues = `vchr_user_email = '${strEmail}' OR vchr_mobile = '${strMobile}' OR vchr_whatsApp_mobile = '${strWhatsAppMobile}'`
          const response = await pgConnection.query(
            objQuery.getQuery.duplicateCheckQueryUser.replace(
              '{ WHERE_CONDITION }',
              strDuplicateValues
            )
          )
          let arrDuplicateErrors = []
          if (response['rows'][0].strEmail == strEmail)
            arrDuplicateErrors.push('EMAIL_ALREADY_EXIST')
          if (response['rows'][0].strMobile == strMobile)
            arrDuplicateErrors.push('MOBILE_ALREADY_EXIST')
          if (response['rows'][0].strWhatsAppMobile == strWhatsAppMobile)
            arrDuplicateErrors.push('MOBILE_WHATS_APP_NUMBER_ALREADY_EXIST')
          throw new Error(arrDuplicateErrors)
        }
      }
      throw new Error(error.message)
    }
  }
  /*
    FUNCTION USE
     * this function for update users.We get query from params.this return a success message to useCases
    request
     * {
     *    intUserPk     : NUMBER
     *    strUserName  : STRING,
     *    strEmail     : STRING
     *    strMobile    : STRING,
     *    intRolePk    : NUMBER
     * }
    response(Success)
     * { message: "successfully Updated" }
    response(Error)
     * { error: "INVALID_USER_ID" }
     * { error: "INVALID_ROLE_PK" }
     * { error: "EMAIL_ALREADY_EXIST" }
     * { error: "MOBILE_ALREADY_EXIST" }

    */
  async function updateUser({
    intUserPk = 0,
    strUserName = '',
    strAddress = '',
    strEmail = '',
    strMobile = '',
    strWhatsAppMobile = '',
    chrUserType,
    chrStatus
  }) {
    try {
      let strDuplicateValues = `pk_int_user_id = ${intUserPk}`
      const responseDup = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryUser.replace(
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
      if (!responseDup['rows'][0]) throw new Error('INVALID_USER_ID')
      let userListResponse = { message: 'successfully Updated' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.updateQuery.updateQueryUser,
          [
            strUserName,
            strAddress,
            strEmail,
            strMobile,
            strWhatsAppMobile,
            chrUserType,
            chrStatus,
            'NOW()',
            intUserPk
          ],
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return userListResponse
    } catch (error) {
      console.log(error.message)
      if (error.message) {
        if (error.message.split(' ')[0] == 'duplicate') {
          let strDuplicateValues = `vchr_user_email = '${strEmail}' OR vchr_mobile = '${strMobile}' OR vchr_whatsApp_mobile = '${strWhatsAppMobile}'`
          const response = await new Promise((resolve, reject) => {
            pgConnection.query(
              objQuery.getQuery.duplicateCheckQueryUser.replace(
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
          let arrDuplicateErrors = []
          if (response['rows'][0].strEmail == strEmail)
            arrDuplicateErrors.push('EMAIL_ALREADY_EXIST')
          if (response['rows'][0].strMobile == strMobile)
            arrDuplicateErrors.push('MOBILE_ALREADY_EXIST')
          if (response['rows'][0].strWhatsAppMobile == strWhatsAppMobile)
            arrDuplicateErrors.push('MOBILE_WHATS_APP_NUMBER_ALREADY_EXIST')
          throw new Error(arrDuplicateErrors)
        } else if (error.message === 'INVALID_USER_ID') {
          throw new Error('INVALID_USER_ID')
        }
      }
    }
  }
  /*
    FUNCTION USE
     * this function for delete users.We get query from params.this return a success message to useCases
    request
     * {
     *    intUserPk    : NUMBER,
     * }
    response(Success)
     * { message: "successfully deleted" }
    response(Error)
     * { error: "INVALID_USER_ID" }
    */
  async function deleteUser({ intUserPk = 0 }) {
    try {
      let strDuplicateValues = `pk_int_user_id = ${intUserPk}`
      const res = await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.getQuery.duplicateCheckQueryUser.replace(
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
      if (!res['rows'][0]) throw new Error('INVALID_USER_ID')
      let userListResponse = { message: 'successfully deleted' }
      await new Promise((resolve, reject) => {
        pgConnection.query(
          objQuery.deleteQuery.deleteQueryUser.replace(
            '{PK_STRINGS}',
            `(${intUserPk})`
          ),
          (err, results) => {
            if (err) {
              reject(new Error(err.message))
            }
            resolve(results)
          }
        )
      })
      return userListResponse
    } catch (error) {
      if (error.message) {
        if (error.message === 'INVALID_USER_ID') {
          throw new Error('INVALID_USER_ID')
        }
      }
    }
  }
}
