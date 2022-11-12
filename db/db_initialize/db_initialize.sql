/* this file for keeping blank Database */
/*
 --  tbl_users : this table for keeping all user details
 */
CREATE TABLE tbl_users (
    pk_int_user_id BIGSERIAL,
    vchr_user_name VARCHAR(200) NOT NULL,
    vchr_user_email VARCHAR(200) NOT NULL,
    vchr_user_address VARCHAR(500),
    /*In chr_user_type field it can be A-Admin, C-Customer */
    chr_user_type VARCHAR(1) NOT NULL DEFAULT 'C',
    vchr_mobile VARCHAR(200) NOT NULL,
    vchr_whatsApp_mobile VARCHAR(200) NOT NULL,
    vchr_user_password VARCHAR(200) NOT NULL,
    /*int_status Active =A , DeActive =D */
    chr_status VARCHAR(1) NOT NULL DEFAULT 'A',
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_user_id PRIMARY KEY (pk_int_user_id)
);

CREATE UNIQUE INDEX tbl_users_unique_vchr_user_name_and_vchr_user_email on tbl_users (UPPER(vchr_user_name), UPPER(vchr_user_email));

CREATE UNIQUE INDEX tbl_users_unique_mobile on tbl_users (UPPER(vchr_mobile));

CREATE UNIQUE INDEX tbl_users_unique_whatsApp_mobile on tbl_users (UPPER(vchr_whatsApp_mobile));

/*
 --  tbl_sizes : this table for keeping all sizes
 */
CREATE TABLE tbl_sizes (
    pk_int_size_id BIGSERIAL,
    vchr_size_name VARCHAR(200) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_size_id PRIMARY KEY (pk_int_size_id)
);

CREATE UNIQUE INDEX tbl_sizes_unique_vchr_size_name on tbl_sizes (UPPER(vchr_size_name));

/*
 --  tbl_colours : this table for keeping all colours
 */
CREATE TABLE tbl_colours (
    pk_int_colour_id BIGSERIAL,
    vchr_colour_name VARCHAR(200) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_colour_id PRIMARY KEY (pk_int_colour_id)
);

CREATE UNIQUE INDEX tbl_colours_unique_vchr_colour_name on tbl_colours (UPPER(vchr_colour_name));

/*
 --  tbl_countries : this table for keeping all countries
 */
CREATE TABLE tbl_countries (
    pk_int_country_id BIGSERIAL,
    vchr_country_name VARCHAR(200) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_country_id PRIMARY KEY (pk_int_country_id)
);

CREATE UNIQUE INDEX tbl_countries_unique_vchr_country_name on tbl_countries (UPPER(vchr_country_name));

/*
 --  tbl_states : this table for keeping all states under the countries
 */
CREATE TABLE tbl_states (
    pk_int_state_id BIGSERIAL,
    fk_int_country_id BIGINT NOT NULL,
    vchr_state_name VARCHAR(200) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_state_id PRIMARY KEY (pk_int_state_id),
    CONSTRAINT fk_int_country_id FOREIGN KEY (fk_int_country_id) REFERENCES tbl_countries(pk_int_country_id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX tbl_states_unique_vchr_state_name on tbl_states (UPPER(vchr_state_name), (fk_int_country_id));

/*
 --  tbl_cities : this table for keeping all cities under countries
 */
CREATE TABLE tbl_cities (
    pk_int_city_id BIGSERIAL,
    fk_int_state_id BIGINT NOT NULL,
    vchr_city_name VARCHAR(200) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_city_id PRIMARY KEY (pk_int_city_id),
    CONSTRAINT fk_int_state_id FOREIGN KEY (fk_int_state_id) REFERENCES tbl_states(pk_int_state_id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX tbl_cities_unique_vchr_city_name on tbl_cities (UPPER(vchr_city_name), (fk_int_state_id));

/*
 --  tbl_product_categories : this table for keeping all product categories ex: Electronics
 */
CREATE TABLE tbl_product_categories (
    pk_int_product_category_id BIGSERIAL,
    vchr_product_category VARCHAR(200) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_product_category_id PRIMARY KEY (pk_int_product_category_id)
);

CREATE UNIQUE INDEX tbl_product_categories_unique_vchr_product_category on tbl_product_categories (UPPER(vchr_product_category));

/*
 --  tbl_product_sub_category : this table for keeping all product sub categories Ex : under Electronics category Mobile will be sub category
 */
CREATE TABLE tbl_product_sub_category (
    pk_int_product_sub_category_id BIGSERIAL,
    fk_int_product_category_id BIGSERIAL,
    vchr_product_sub_category VARCHAR(200) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_product_sub_category_id PRIMARY KEY (pk_int_product_sub_category_id),
    CONSTRAINT fk_int_product_category_id FOREIGN KEY (fk_int_product_category_id) REFERENCES tbl_product_categories(pk_int_product_category_id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX tbl_product_sub_category_unique_vchr_product_category on tbl_product_sub_category (
    UPPER(vchr_product_sub_category),
    (fk_int_product_category_id)
);

/*
 --  tbl_products : this table for keeping all products
 */
CREATE TABLE tbl_products (
    pk_int_product_id BIGSERIAL,
    fk_int_product_category_id BIGSERIAL,
    fk_int_product_sub_category_id BIGSERIAL,
    fk_int_product_size_id BIGINT REFERENCES tbl_sizes(pk_int_size_id) ON DELETE
    SET
        NULL,
        fk_int_product_colour_id BIGINT REFERENCES tbl_colours(pk_int_colour_id) ON DELETE
    SET
        NULL,
        vchr_product_name VARCHAR(200) NOT NULL,
        vchr_product_description VARCHAR(500) NOT NULL,
        vchr_product_price VARCHAR(200) NOT NULL,
        vchr_shipping_days VARCHAR(100) NOT NULL,
        bln_warranty_guarantee BOOLEAN NOT NULL DEFAULT 'TRUE',
        bln_featured BOOLEAN NOT NULL DEFAULT 'FALSE',
        bln_top_selling BOOLEAN NOT NULL DEFAULT 'FALSE',
        bln_tax BOOLEAN NOT NULL DEFAULT 'FALSE',
        bln_shipping_charges BOOLEAN NOT NULL DEFAULT 'FALSE',
        /* int_status Active =A , DeActive =D */
        chr_status VARCHAR(1) NOT NULL DEFAULT 'A',
        dat_created_date TIMESTAMP NOT NULL,
        dat_modified_date TIMESTAMP,
        CONSTRAINT pk_int_product_id PRIMARY KEY (pk_int_product_id),
        CONSTRAINT fk_int_product_category_id FOREIGN KEY (fk_int_product_category_id) REFERENCES tbl_product_categories(pk_int_product_category_id) ON DELETE CASCADE,
        CONSTRAINT fk_int_product_sub_category_id FOREIGN KEY (fk_int_product_sub_category_id) REFERENCES tbl_product_sub_category(pk_int_product_sub_category_id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX tbl_products_unique_vchr_product_name on tbl_products (
    UPPER(vchr_product_name),
    (fk_int_product_category_id),
    (fk_int_product_category_id)
);

/*
 --  tbl_media : this table for keeping all medias for home page
 */
CREATE TABLE tbl_media (
    pk_int_media_id BIGSERIAL,
    fk_int_product_id BIGSERIAL,
    vchr_media_name VARCHAR(500) NOT NULL,
    vchr_media_path VARCHAR(1500) NOT NULL,
    /* chr_type Image =I , Videos =V */
    chr_type VARCHAR(1) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_media_id PRIMARY KEY (pk_int_media_id),
    CONSTRAINT fk_int_product_id FOREIGN KEY (fk_int_product_id) REFERENCES tbl_products(pk_int_product_id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX tbl_media_unique_vchr_media_name on tbl_media (UPPER(vchr_media_name),(fk_int_product_id));

/*
 --  tbl_media : this table for keeping all medias for home page
 */
CREATE TABLE tbl_dashboard_media (
    pk_int_dashboard_media_id BIGSERIAL,
    fk_int_product_id BIGSERIAL,
    vchr_dashboard_media_name VARCHAR(500) NOT NULL,
    vchr_dashboard_media_path VARCHAR(1500) NOT NULL,
    /* chr_type Image =I , Videos =V */
    chr_type VARCHAR(1) NOT NULL,
    dat_created_date TIMESTAMP NOT NULL,
    dat_modified_date TIMESTAMP,
    CONSTRAINT pk_int_dashboard_media_id PRIMARY KEY (pk_int_dashboard_media_id),
    CONSTRAINT fk_int_product_id FOREIGN KEY (fk_int_product_id) REFERENCES tbl_products(pk_int_product_id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX tbl_dashboard_media_unique_vchr_dashboard_media_name on tbl_dashboard_media (
    UPPER(vchr_dashboard_media_name),
    (fk_int_product_id)
);