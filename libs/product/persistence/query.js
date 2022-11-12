/**
 * In this file we write all query about this module
 */
import { TIME_ZONE } from '../../../helpers/constants/constVariables'

let objQuery = {
  getQuery: {
    getQueryProduct: `
                        SELECT 
                          pk_int_product_id                       AS "intProductPk",
                          cate.pk_int_product_category_id         AS "strCategoryId",
                          cate.vchr_product_category              AS "strCategory",
                          subCate.pk_int_product_sub_category_id  AS "strSubCategoryId",
                          subCate.vchr_product_sub_category       AS "strSubCategory",
                          colour.pk_int_colour_id                 AS "strProductColourId",
                          colour.vchr_colour_name                 AS "strColour",
                          Size.pk_int_size_id                     AS "strProductSizeId",
                          Size.vchr_size_name                     AS "strSize",
                          vchr_product_name                       AS "strProductName",
                          vchr_product_description                AS "strProductDescription",
                          vchr_product_price                      AS "strProductPrice",
                          vchr_shipping_days                      AS "strShippingDays",
                          bln_warranty_guarantee                  AS "blnWarrantyGuarantee",
                          bln_featured                            AS "blnFeatured",
                          bln_top_selling                         AS "blnTopSelling",
                          bln_tax                                 AS "blnTax",
                          bln_shipping_charges                    AS "blnShippingCharges",
                          chr_status                              AS "chrStatus",
                          product.dat_created_date   ${TIME_ZONE} AS "datCreatedDate",
                          product.dat_modified_date  ${TIME_ZONE} AS "datModifiedDate",
                          JSON_AGG (json_build_object(
                                  'strMediaName',media.vchr_media_name,
                                  'strMediaPath',media.vchr_media_path,
                                  'chrType',media.chr_type
                                  ))                              AS "arrProductMedia",
                        ROW_NUMBER () OVER (
                        ORDER BY product.dat_created_date)        AS "id"
                        FROM tbl_products                         AS product 

                        LEFT JOIN tbl_product_categories          AS cate
                        ON product.fk_int_product_category_id = cate.pk_int_product_category_id

                        LEFT JOIN tbl_product_sub_category        AS subCate
                        ON product.fk_int_product_sub_category_id = subCate.pk_int_product_sub_category_id

                        LEFT JOIN tbl_colours                     AS colour
                        ON product.fk_int_product_colour_id = colour.pk_int_colour_id
                        
                        LEFT JOIN tbl_sizes                        AS size
                        ON product.fk_int_product_size_id = size.pk_int_size_id

                        INNER JOIN tbl_media                      AS media
                        ON product.pk_int_product_id = media.fk_int_product_id
                        { WHERE_CONDITION }
                        GROUP BY product.pk_int_product_id,cate.pk_int_product_category_id,
                        subCate.pk_int_product_sub_category_id,pk_int_colour_id,pk_int_size_id ;`,
    duplicateCheckQueryProduct: `
                        SELECT 
                        pk_int_product_id AS "intProductPk",
                        vchr_product_name AS "strProductName"
                        FROM tbl_products
                        WHERE { WHERE_CONDITION }`,
    getQueryMediaDetails: `SELECT vchr_media_path as "strMediaPath"
                            FROM tbl_media WHERE  fk_int_product_id = '{ ID }'`
  },
  createQuery: {
    createQueryProduct: `
                        INSERT INTO tbl_products(
                          fk_int_product_category_id,
                          fk_int_product_sub_category_id,
                          vchr_product_name,
                          vchr_product_description,
                          fk_int_product_colour_id,
                          vchr_product_price,
                          fk_int_product_size_id,
                          vchr_shipping_days,
                          bln_warranty_guarantee,
                          bln_featured,
                          bln_top_selling,
                          bln_tax,
                          bln_shipping_charges,
                          chr_status,
                          dat_created_date)
                        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
                        RETURNING pk_int_product_id AS "intProductPk";`,
    createProductMedia: `
                        INSERT INTO tbl_media(
                          fk_int_product_id,
                          vchr_media_name,
                          vchr_media_path,
                          chr_type,
                          dat_created_date)
                        VALUES { VALUES } ;`
  },
  updateQuery: {
    updateQueryProduct: `
                        UPDATE 
                          tbl_products SET
                          fk_int_product_category_id     = $1,
                          fk_int_product_sub_category_id = $2,
                          vchr_product_name              = $3,
                          vchr_product_description       = $4,
                          fk_int_product_colour_id       = $5,
                          vchr_product_price             = $6,
                          fk_int_product_size_id         = $7,
                          vchr_shipping_days             = $8,
                          bln_warranty_guarantee         = $9,
                          bln_featured                   = $10,
                          bln_top_selling                = $11,
                          bln_tax                        = $12,
                          bln_shipping_charges           = $13,
                          chr_status                     = $14,
                          dat_modified_date              = $15
                        WHERE pk_int_product_id          = $16;`
  },
  deleteQuery: {
    deleteQueryProductMedia: `DELETE FROM tbl_media 
                              WHERE fk_int_product_id in {PK_STRINGS} 
                              RETURNING vchr_media_path as "strMediaPath" `,
    deleteQueryProduct: `DELETE FROM tbl_products 
                         WHERE pk_int_product_id in {PK_STRINGS}`
  }
}
module.exports = objQuery
