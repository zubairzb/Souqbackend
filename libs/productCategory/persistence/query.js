/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryProductCategory: `
                    SELECT 
                      pk_int_product_category_id    AS "intProductCategoryPk",
                      vchr_product_category         AS "strProductCategoryName",
                      dat_created_date  ${TIME_ZONE} AS "datCreatedDate",
                      dat_modified_date ${TIME_ZONE} AS "datModifiedDate",
                    ROW_NUMBER () OVER (
                    ORDER BY dat_created_date) AS "id"
                    FROM tbl_product_categories ;`,

    duplicateCheckQueryProductCategory: `
                    SELECT 
                      vchr_product_category AS "strProductCategoryName"
                    FROM tbl_product_categories
                    WHERE { WHERE_CONDITION }`
  },
  createQuery: {
    createQueryProductCategory: `
                    INSERT INTO tbl_product_categories(
                      vchr_product_category,
                      dat_created_date) 
                    VALUES ($1,$2);`
  },
  updateQuery: {
    updateQueryProductCategory: `
                    UPDATE 
                      tbl_product_categories SET
                      vchr_product_category          = $1,
                      dat_modified_date              = $2
                    WHERE pk_int_product_category_id = $3`
  },
  deleteQuery: {
    deleteQueryProductCategory: `
                    DELETE FROM 
                      tbl_product_categories 
                    WHERE pk_int_product_category_id in {PK_STRINGS}`
  }
}
module.exports = objQuery
