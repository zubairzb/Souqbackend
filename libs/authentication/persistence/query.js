/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  loginQuery: {
    getQueryLoginDetails: `SELECT 
                             pk_int_user_id        AS "intUserPk",
                             vchr_user_password    AS "strPassword",
                             vchr_user_name        AS "strUserName",
                             vchr_user_email       AS "strEmail",
                             vchr_mobile           AS "strMobile",
                             chr_status            AS "blnStatus",
                             dat_created_date  ${TIME_ZONE}     AS "datCreatedDate",
                             dat_modified_date ${TIME_ZONE}     AS "datModifiedDate"
                           FROM tbl_users
                           WHERE vchr_user_email = $1 ;`
  }
}
module.exports = objQuery
