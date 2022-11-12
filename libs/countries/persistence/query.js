/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryCountry: `SELECT 
                       pk_int_country_id              AS "intCountryPk",
                       vchr_country_name              AS "strCountryName",
                       dat_created_date  ${TIME_ZONE} AS "datCreatedDate",
                       dat_modified_date ${TIME_ZONE} AS "datModifiedDate",
                      ROW_NUMBER () OVER (
                      ORDER BY dat_created_date) AS "id"
                      FROM tbl_countries;`,

    duplicateCheckQueryCountry: `SELECT 
                                  vchr_country_name AS "strCountryName"
                                 FROM tbl_countries
                                 WHERE UPPER(vchr_country_name) = $1`,

    updateCheckQueryCountry: `    SELECT 
                                    vchr_country_name AS "strCountryName"
                                  FROM tbl_countries
                                  WHERE pk_int_country_id = $1`
  },
  createQuery: {
    createQueryCountry: `         INSERT INTO tbl_countries(
                                   vchr_country_name,
                                   dat_created_date) 
                                  VALUES ($1,$2)`
  },
  updateQuery: {
    updateQueryCountry: `         UPDATE 
                                   tbl_countries SET
                                   vchr_country_name   = $1,
                                   dat_modified_date   = $2
                                  WHERE pk_int_country_id = $3`
  },
  deleteQuery: {
    deleteQueryCountry: `         DELETE FROM tbl_countries WHERE pk_int_country_id = $1`
  }
}
module.exports = objQuery
