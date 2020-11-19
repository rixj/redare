USE redare;
SELECT * FROM rds_product;
SELECT * FROM mintel;
SELECT * FROM mintel_comp;
SELECT c.id, CONCAT(c.category,': ',c.model_criteria,': ',c.label) AS Category 
FROM comp_info c;

CREATE TEMPORARY TABLE zo(
    zo_id INT PRIMARY KEY,
	rdsproduct_id INT NOT NULL AUTO_INCREMENT,
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


INSERT INTO credits(customerNumber,creditLimit)
SELECT customerNumber, creditLimit
FROM customers
WHERE creditLimit > 0;