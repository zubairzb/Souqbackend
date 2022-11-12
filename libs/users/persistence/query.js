/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryUsers: `SELECT 
                       pk_int_user_id                 AS "intUserPk",
                       vchr_user_name                 AS "strUserName",
                       vchr_user_address              AS "strUserAddress",
                       vchr_user_email                AS "strEmail",
                       vchr_mobile                    AS "strMobile",
                       vchr_whatsApp_mobile           AS "strWhatsAppMobile",
                       chr_status                     AS "blnUserStatus",
                       dat_created_date  ${TIME_ZONE} AS "datCreatedDate",
                       dat_modified_date ${TIME_ZONE} AS "datModifiedDate",
                      ROW_NUMBER () OVER (
                      ORDER BY dat_created_date)      AS "id"
                      FROM tbl_users
                     WHERE { WHERE_CONDITION };`,

    duplicateCheckQueryUser: `SELECT 
                      vchr_user_email      AS "strEmail",
                      vchr_mobile          AS "strMobile",
                      vchr_whatsApp_mobile AS "strWhatsAppMobile"
                    FROM tbl_users
                    WHERE { WHERE_CONDITION }`
  },
  createQuery: {
    createQueryUser: `INSERT INTO tbl_users(
                        vchr_user_name,
                        vchr_user_address,
                        vchr_user_email,
                        vchr_mobile,
                        vchr_whatsApp_mobile,
                        vchr_user_password,
                        chr_user_type,
                        chr_status,
                        dat_created_date)
                      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);`
  },
  updateQuery: {
    updateQueryUser: `UPDATE 
                        tbl_users SET
                        vchr_user_name       = $1,
                        vchr_user_address    = $2,
                        vchr_user_email      = $3,
                        vchr_mobile          = $4,
                        vchr_whatsApp_mobile = $5,
                        chr_user_type        = $6,
                        chr_status           = $7,
                        dat_modified_date    = $8
                      WHERE pk_int_user_id   = $9`
  },
  deleteQuery: {
    deleteQueryUser: `DELETE FROM tbl_users WHERE pk_int_user_id in {PK_STRINGS}`
  }
}
module.exports = objQuery
