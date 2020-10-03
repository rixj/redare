/*
DROP PROCEDURE [IF EXISTS] UpdateMintel;
TRUNCATE rds0
SELECT *  FROM rds_product
CALL UpdateMintel
*/
DELIMITER //
CREATE PROCEDURE UpdateMintel()
BEGIN
    INSERT INTO rds_product (rds_id, manufacturer, company, ultimate_company, brand, name, displayname, size, subgroup_1, market, imagelinks)
    SELECT
    barcode, manufacturer, company, ultimate_company, brand, product, CONCAT(brand,' ',product), CONCAT(total_pack_size,' ',packaging_units), subcategory, market, image_links
    FROM mintel;
END //
DELIMITER ;