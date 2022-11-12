/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryProductSubCategory: `
                        SELECT 
                          pk_int_product_sub_category_id         AS "intProductSubCategoryPk",
                          vchr_product_sub_category              AS "strProductSubCategoryName",
                          cate.pk_int_product_category_id        AS "strCategoryId",
                          cate.vchr_product_category             AS "strCategory",
                          subCate.dat_created_date  ${TIME_ZONE} AS "datCreatedDate",
                          subCate.dat_modified_date ${TIME_ZONE} AS "datModifiedDate",
                        ROW_NUMBER () OVER (
                        ORDER BY subCate.dat_created_date)        AS "id"
                        FROM tbl_product_sub_category             AS subCate 
                        LEFT JOIN tbl_product_categories          AS cate
                        ON subCate.fk_int_product_category_id = cate.pk_int_product_category_id
                        { WHERE_CONDITION };`,

    duplicateCheckQueryProductSubCategory: `
                        SELECT 
                          vchr_product_sub_category AS "strProductSubCategoryName"
                        FROM tbl_product_sub_category
                        WHERE { WHERE_CONDITION }`
  },
  createQuery: {
    createQueryProductSubCategory: `
                        INSERT INTO tbl_product_sub_category(
                          fk_int_product_category_id,
                          vchr_product_sub_category,
                          dat_created_date) 
                        VALUES ($1,$2,$3);`
  },
  updateQuery: {
    updateQueryProductSubCategory: `
                        UPDATE 
                          tbl_product_sub_category SET
                          fk_int_product_category_id          = $1,
                          vchr_product_sub_category           = $2,
                          dat_modified_date                   = $3
                        WHERE pk_int_product_sub_category_id  = $4`
  },
  deleteQuery: {
    deleteQueryProductSubCategory: `DELETE FROM tbl_product_sub_category WHERE pk_int_product_sub_category_id in {PK_STRINGS}`
  }
}
module.exports = objQuery
