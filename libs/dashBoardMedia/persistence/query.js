/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryDashBoardMedia: `
                        SELECT 
                          pk_int_dashboard_media_id                 AS "intDashBoardMediaPk",
                          product.pk_int_product_id                 AS "intProductId",
                          product.vchr_product_name                 AS "strProductName",
                          vchr_dashboard_media_name                 AS "strDashBoardMediaName",
                          vchr_dashboard_media_path                 AS "strDashBoardMediaPath",
                          chr_type                                  AS "chrMediaType",
                        ROW_NUMBER () OVER (
                        ORDER BY dashBoardMedia.dat_created_date)   AS "id"
                        FROM tbl_dashboard_media                    AS dashBoardMedia 
                        LEFT JOIN tbl_products                      AS product
                        ON dashBoardMedia.fk_int_product_id = product.pk_int_product_id
                        { WHERE_CONDITION };`,
    duplicateCheckQueryDashBoardMedia: `
                        SELECT 
                          pk_int_dashboard_media_id AS "intDashBoardMediaPk",
                          vchr_dashboard_media_name AS "strDashBoardMediaName"
                        FROM tbl_dashboard_media
                        WHERE { WHERE_CONDITION }`,
    getQueryProductDetails: `SELECT pk_int_product_id as "intProductId"
                            FROM tbl_products WHERE  pk_int_product_id = '{ ID }'`,
    getCountOfMedias: `SELECT chr_type, COUNT(chr_type) FROM tbl_dashboard_media GROUP BY chr_type ;`
  },
  createQuery: {
    createDashBoardMediaMedia: `
                        INSERT INTO tbl_dashboard_media(
                          fk_int_product_id,
                          vchr_dashboard_media_name,
                          vchr_dashboard_media_path,
                          chr_type,
                          dat_created_date)
                        VALUES { VALUES } ;`
  },
  updateQuery: {
    updateQueryDashBoardMedia: `
                        UPDATE 
                          tbl_dashboard_media SET
                          fk_int_product_id             = $1,
                          vchr_dashboard_media_name     = $2,
                          vchr_dashboard_media_path     = $3,
                          chr_type                      = $4,
                          dat_modified_date             = $5
                        WHERE pk_int_dashboard_media_id  = $6;`
  },
  deleteQuery: {
    deleteQueryDashBoardMedia: `DELETE FROM tbl_dashboard_media 
                         WHERE pk_int_dashboard_media_id in {PK_STRINGS}`
  }
}
module.exports = objQuery
