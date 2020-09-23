#CREATE DATABASE redare;
#USE redare;

DROP TABLE IF EXISTS product_attribute;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS attribute;
DROP TABLE IF EXISTS manufacturer;

CREATE TABLE manufacturer(
	id INT NOT NULL AUTO_INCREMENT,
	name NVARCHAR(100),
	ultimate_company NVARCHAR(100), # made
	country_hq NVARCHAR(100),
	PRIMARY KEY (id)
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
	country_made_in NVARCHAR(100),
	product_description NVARCHAR(4000), # made
	image_links VARCHAR(4000),
	PRIMARY KEY (id),
	CONSTRAINT fk_manufacturer FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id)
);

CREATE TABLE attribute(
	id INT NOT NULL AUTO_INCREMENT,
	category NVARCHAR(100),
	model_criteria NVARCHAR(100), # made
	label NVARCHAR(255),
	links VARCHAR(4000),# made
	PRIMARY KEY (id)
);

CREATE TABLE product_attribute(
	product_id INT NOT NULL REFERENCES product(id),
	attribute_id INT NOT NULL REFERENCES attribute(id),
	CONSTRAINT pk_product_attribute PRIMARY KEY (product_id, attribute_id)
);

select * from product
