/*
https://stackoverflow.com/questions/37213789/split-a-string-and-loop-through-values-in-mysql-procedure
https://stackoverflow.com/questions/14506871/how-to-execute-a-stored-procedure-inside-a-select-query
SELECT * FROM rds_product
SELECT * FROM mintel_comp
SELECT * FROM mintel; truncate mintel
SELECT * FROM attribute

CREATE TABLE TESTCOMP (
brand NVARCHAR(200),
name NVARCHAR(200)
);

input (productId)
goes through entire TABLE attribute's COL keywords to see if any are in the TABLE rds_product's COL product_description
*/
