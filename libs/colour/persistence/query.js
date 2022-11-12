/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryColour: `SELECT 
                       pk_int_colour_id               AS "intColourPk",
                       vchr_colour_name               AS "strColourName",
                       dat_created_date  ${TIME_ZONE} AS "datCreatedDate",
                       dat_modified_date ${TIME_ZONE} AS "datModifiedDate",
                      ROW_NUMBER () OVER (
                      ORDER BY dat_created_date) AS "id"
                      FROM tbl_colours;`,

    duplicateCheckQueryColour: `SELECT 
                                  vchr_colour_name AS "strColourName"
                                 FROM tbl_colours
                                 WHERE UPPER(vchr_colour_name) = $1`,

    updateCheckQueryColour: `    SELECT 
                                    vchr_colour_name AS "strColourName"
                                  FROM tbl_colours
                                  WHERE pk_int_colour_id = $1`
  },
  createQuery: {
    createQueryColour: `         INSERT INTO tbl_colours(
                                   vchr_colour_name,
                                   dat_created_date) 
                                  VALUES ($1,$2)`
  },
  updateQuery: {
    updateQueryColour: `         UPDATE 
                                   tbl_colours SET
                                   vchr_colour_name   = $1,
                                   dat_modified_date   = $2
                                  WHERE pk_int_colour_id = $3`
  },
  deleteQuery: {
    deleteQueryColour: `         DELETE FROM tbl_colours WHERE pk_int_colour_id = $1`
  }
}
module.exports = objQuery
