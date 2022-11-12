/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryStates: `SELECT 
                      pk_int_state_id                      AS "intStatePk",
                      vchr_state_name                      AS "strStateName",
                      country.pk_int_country_id            AS "strCountryId",
                      country.vchr_country_name            AS "strCountryName",
                      state.dat_created_date  ${TIME_ZONE} AS "datCreatedDate",
                      state.dat_modified_date ${TIME_ZONE} AS "datModifiedDate",
                     ROW_NUMBER () OVER (
                     ORDER BY state.dat_created_date)      AS "id"
                    FROM tbl_states                        AS state
                    LEFT JOIN tbl_countries                AS country
                    ON state.fk_int_country_id = country.pk_int_country_id
                    { WHERE_CONDITION };`,

    duplicateCheckQueryState: `SELECT 
                    vchr_state_name AS "strStateName"
                    FROM tbl_states
                    WHERE { WHERE_CONDITION }`
  },
  createQuery: {
    createQueryState: `INSERT INTO tbl_states(
                        fk_int_country_id,
                        vchr_state_name,
                        dat_created_date) 
                      VALUES ($1,$2,$3);`
  },
  updateQuery: {
    updateQueryState: `UPDATE 
                        tbl_states SET
                        fk_int_country_id   = $1,
                        vchr_state_name      = $2,
                        dat_modified_date   = $3
                      WHERE pk_int_state_id  = $4`
  },
  deleteQuery: {
    deleteQueryState: `DELETE FROM tbl_states WHERE pk_int_state_id in {PK_STRINGS}`
  }
}
module.exports = objQuery
