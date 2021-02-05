/*
CREATE DATABASE redare
USE redare
SELECT * FROM mintel;
SELECT * FROM rds_product;
SELECT * FROM category;
SELECT * FROM country;
SELECT * FROM manufacturer;
SELECT * FROM product_attribute;
SELECT * FROM attribute_keyword;
SELECT * FROM attribute;
SELECT * FROM person;
SELECT * FROM expert;
SELECT * FROM rank;

DROP TABLE IF EXISTS mintel;
DROP TABLE IF EXISTS rds_product;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS country;
DROP TABLE IF EXISTS manufacturer;
DROP TABLE IF EXISTS product_attribute;
DROP TABLE IF EXISTS attribute_keyword;
DROP TABLE IF EXISTS attribute;
DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS expert;
DROP TABLE IF EXISTS rank;
*/

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
    market NVARCHAR(100),
	name NVARCHAR(1000), -- product
	displayname NVARCHAR(1000), -- brand + product
	size NVARCHAR(200),
	subgroup_1 NVARCHAR(200),
	subgroup_2 NVARCHAR(200),
    product_description NVARCHAR(2000),
	imagelinks NVARCHAR(4000), -- image_links
    category NVARCHAR(200),
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

CREATE TABLE product_attribute(
	product_id INT NOT NULL REFERENCES product(id),
	attribute_id INT NOT NULL REFERENCES attribute(id),
	CONSTRAINT pk_product_attribute PRIMARY KEY (product_id, attribute_id)
);

CREATE TABLE attribute_keyword(
	attribute_id INT NOT NULL REFERENCES attribute(id),
    keyword NVARCHAR(400),
    FOREIGN KEY (attribute_id) REFERENCES attribute(id)
);

CREATE TABLE attribute (
	id INT NOT NULL AUTO_INCREMENT
	,category VARCHAR(100)
	,model_criteria VARCHAR(100)
	,label VARCHAR(100)
	,links VARCHAR(1000)
    ,mintel VARCHAR(100)
	,PRIMARY KEY (id)
	);

CREATE TABLE person (
	id INT NOT NULL AUTO_INCREMENT
	,first_name VARCHAR(200)
	,last_name  VARCHAR(200)
	,address VARCHAR(1000)
	,phone VARCHAR(200)
    ,username VARCHAR(200)
    ,email VARCHAR(320)
	,PRIMARY KEY (id)
	);

CREATE TABLE expert (
	id INT NOT NULL AUTO_INCREMENT
	,person_id INT
	,PRIMARY KEY (id)
	);

/*
the rds_id is redundant. it should not need to print the barcode in two different tables. but maybe it should if Steven is writing directly to the db.
*/
CREATE TABLE rank (
	id INT NOT NULL AUTO_INCREMENT
	,rds_id NVARCHAR(1000)
    ,rank INT
    ,expert_id INT
    ,FOREIGN KEY (expert_id) REFERENCES expert(id)
	,PRIMARY KEY (id)
	);