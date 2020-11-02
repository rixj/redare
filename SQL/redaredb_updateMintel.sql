/*
DROP PROCEDURE IF EXISTS UpdateMintel;
TRUNCATE rds_product
SELECT *  FROM rds_product

SELECT *  FROM mintel WHERE category LIKE '%HARD%'
CALL UpdateMintel


*/
DELIMITER //
CREATE PROCEDURE UpdateMintel()
BEGIN
    INSERT INTO rds_product (rds_id, manufacturer, company, ultimate_company, brand, name, displayname, size, subgroup_1, market, product_description, imagelinks, category)
    SELECT
    barcode, manufacturer, company, ultimate_company, brand, product, CONCAT(brand,' ',product), CONCAT(total_pack_size,' ',packaging_units), subcategory, market, product_description, image_links, category
    FROM mintel;
END //
DELIMITER ;