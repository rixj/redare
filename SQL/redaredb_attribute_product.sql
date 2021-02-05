#SELECT DISTINCT rp.id FROM attribute_keyword ak, attribute a, rds_product rp

INSERT INTO product_attribute
SELECT DISTINCT rp.id
	,ak.attribute_id
FROM attribute_keyword ak
	,rds_product rp
WHERE rp.product_description LIKE CONCAT ('%',ak.keyword,'%');

select * from attribute_keyword where keyword like '%Climate Compensated Zero Emission Transports%'
