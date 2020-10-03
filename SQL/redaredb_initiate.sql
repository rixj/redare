/*
CREATE DATABASE redare;
USE redare;
TRUNCATE `redare`.`mintel`
SELECT * FROM `redare`.`mintel` 
// run if tables already exist
DROP TABLE IF EXISTS product_attribute;
DROP TABLE IF EXISTS product_category;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS attribute;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS manufacturer;
DROP TABLE IF EXISTS country;
DROP TABLE IF EXISTS mintel;
DROP TABLE IF EXISTS rds_product;
*/
DROP TABLE IF EXISTS mintel;
DROP TABLE IF EXISTS rds_product;
DROP TABLE IF EXISTS attribute;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS country;
DROP TABLE IF EXISTS manufacturer;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS product_attribute;
DROP TABLE IF EXISTS product_category;

CREATE TABLE mintel(
	id INT NOT NULL AUTO_INCREMENT,
	product NVARCHAR(1000),
	product_description NVARCHAR(2000),
    brand NVARCHAR(200),
	category NVARCHAR(200),
	subcategory NVARCHAR(200),
	barcode BIGINT,
	production_code NVARCHAR(100),
	claim_category NVARCHAR(1000),
	claims NVARCHAR(1000),
    total_pack_size NVARCHAR(100),
    packaging_units NVARCHAR(100),
	package_type NVARCHAR(100),
	package_material NVARCHAR(100),
	package_material_2ndary NVARCHAR(100),
	package_type_2ndary NVARCHAR(100),
    market NVARCHAR(100),
    image_links NVARCHAR(4000),
	location_of_manufacture NVARCHAR(100),
	import_status NVARCHAR(100),
	company NVARCHAR(100),
    ultimate_company NVARCHAR(100),
	manufacturer NVARCHAR(100),
	ingredients NVARCHAR(1000),
	PRIMARY KEY (id)
);

CREATE TABLE rds_product(
	id INT NOT NULL AUTO_INCREMENT,
	rds_id NVARCHAR(1000),
    imagefile NVARCHAR(100),
	manufacturer NVARCHAR(100),
	company NVARCHAR(100),
	ultimate_company NVARCHAR(100),
	brand NVARCHAR(200),
	name NVARCHAR(1000), -- product
	displayname NVARCHAR(1000), -- brand + product
	size NVARCHAR(200),
	subgroup_1 NVARCHAR(200),
	subgroup_2 NVARCHAR(200),
	market NVARCHAR(100),
	imagelinks NVARCHAR(4000), -- image_links
	PRIMARY KEY (id)
);

CREATE TABLE attribute(
	id INT NOT NULL AUTO_INCREMENT,
	name NVARCHAR(100),
	model_criteria NVARCHAR(100),
	label NVARCHAR(255),
	links VARCHAR(4000),
	PRIMARY KEY (id)
);

CREATE TABLE category(
	id INT NOT NULL AUTO_INCREMENT,
	name NVARCHAR(255),
    source NVARCHAR(100),
	subcategory NVARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE country(
	id INT NOT NULL AUTO_INCREMENT,
	name NVARCHAR(100),
	continent NVARCHAR(100),
	initials NVARCHAR(5),
	PRIMARY KEY (id)
);

CREATE TABLE manufacturer(
	id INT NOT NULL AUTO_INCREMENT,
	name NVARCHAR(100),
	ultimate_company NVARCHAR(100),
	country_hq INT,
	PRIMARY KEY (id),
    FOREIGN KEY (country_hq) REFERENCES country(id)
);

CREATE TABLE product(
	id INT NOT NULL AUTO_INCREMENT,
	barcode BIGINT,
	image_file_ext VARCHAR(10),
	manufacturer_id INT,
	brand NVARCHAR(255),
	name NVARCHAR(4000),
	size NVARCHAR(100),
	subgroup_1 NVARCHAR(100),
	subgroup_2 NVARCHAR(100),
	country_made_in INT,
	product_description NVARCHAR(4000),
	image_links VARCHAR(4000),
	PRIMARY KEY (id),
    CONSTRAINT fk_country FOREIGN KEY (country_made_in) REFERENCES country(id),
	CONSTRAINT fk_manufacturer FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id)
);

CREATE TABLE product_category(
  product_id INT NOT NULL REFERENCES product(id),
  category_id INT NOT NULL REFERENCES category(id),
  CONSTRAINT pk_product_category PRIMARY KEY (product_id, category_id)
);

CREATE TABLE product_attribute(
	product_id INT NOT NULL REFERENCES product(id),
	attribute_id INT NOT NULL REFERENCES attribute(id),
	CONSTRAINT pk_product_attribute PRIMARY KEY (product_id, attribute_id)
);