/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'
let objQuery = {
  getQuery: {
    getQuerySize: `SELECT 
                       pk_int_size_id                   AS "intSizePk",
                       vchr_size_name                   AS "strSizeName",
                       dat_created_date  ${TIME_ZONE}   AS "datCreatedDate" ,
                       dat_modified_date ${TIME_ZONE}   AS "datModifiedDate",
                      ROW_NUMBER () OVER (
                      ORDER BY dat_created_date) AS "id"
                      FROM tbl_sizes;`,

    duplicateCheckQuerySize: `SELECT 
                                  vchr_size_name AS "strSizeName"
                                 FROM tbl_sizes
                                 WHERE UPPER(vchr_size_name) = $1`,

    updateCheckQuerySize: `    SELECT 
                                    vchr_size_name AS "strSizeName"
                                  FROM tbl_sizes
                                  WHERE pk_int_size_id = $1`
  },
  createQuery: {
    createQuerySize: `         INSERT INTO tbl_sizes(
                                   vchr_size_name,
                                   dat_created_date) 
                                  VALUES ($1,$2)`
  },
  updateQuery: {
    updateQuerySize: `         UPDATE 
                                   tbl_sizes SET
                                   vchr_size_name   = $1,
                                   dat_modified_date   = $2
                                  WHERE pk_int_size_id = $3`
  },
  deleteQuery: {
    deleteQuerySize: `         DELETE FROM tbl_sizes WHERE pk_int_size_id = $1`
  }
}
module.exports = objQuery
