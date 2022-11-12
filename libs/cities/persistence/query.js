/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryCities: `SELECT 
                      pk_int_city_id                 AS  "intCityPk",
                      vchr_city_name                 AS  "strCityName",
                      state.pk_int_state_id          AS  "strStateId",
                      state.vchr_state_name          AS  "strStateName",
                      city.dat_created_date  ${TIME_ZONE}         AS  "datCreatedDate",
                      city.dat_modified_date ${TIME_ZONE}         AS  "datModifiedDate",
                    ROW_NUMBER () OVER (
                    ORDER BY city.dat_created_date) AS  "id"
                    FROM tbl_cities                  AS city
                    LEFT JOIN tbl_states             AS state
                    ON city.fk_int_state_id = state.pk_int_state_id
                    { WHERE_CONDITION };`,

    duplicateCheckQueryCity: `
                    SELECT 
                      vchr_city_name AS "strCityName"
                    FROM tbl_cities
                    WHERE { WHERE_CONDITION }`
  },
  createQuery: {
    createQueryCity: `
                    INSERT INTO tbl_cities(
                      fk_int_state_id,
                      vchr_city_name,
                      dat_created_date) 
                    VALUES ($1,$2,$3);`
  },
  updateQuery: {
    updateQueryCity: `UPDATE 
                        tbl_cities SET
                        fk_int_state_id   = $1,
                        vchr_city_name      = $2,
                        dat_modified_date   = $3
                      WHERE pk_int_city_id  = $4`
  },
  deleteQuery: {
    deleteQueryCity: `DELETE FROM tbl_cities 
                      WHERE pk_int_city_id in 
                      {PK_STRINGS}`
  }
}
module.exports = objQuery
