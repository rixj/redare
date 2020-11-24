/*
DROP TABLE IF EXISTS comp_info

SELECT * FROM mintel_comp
SELECT * FROM comp_info
*/
CREATE TABLE mintel_comp(
	mintel_id INT NOT NULL REFERENCES mintel(id),
	attribute_id INT NOT NULL REFERENCES attribute(id),
	CONSTRAINT pk_mintel_attribute PRIMARY KEY (mintel_id, attribute_id)
);


CREATE TABLE comp_info (
	id INT NOT NULL AUTO_INCREMENT
	,category VARCHAR(100)
	,model_criteria VARCHAR(100)
	,label VARCHAR(100)
	,links VARCHAR(1000)
    ,mintel VARCHAR(100)
    ,keywords VARCHAR(1000)
	,PRIMARY KEY (id)
	);

CREATE VIEW view_sheetDairyHeaders (today) AS SELECT CURRENT_DATE;

SELECT c.id, CONCAT(c.category,': ',c.model_criteria,': ',c.label) AS Category 
FROM comp_info c;

# HARD SURFACE
INSERT INTO mintel_comp(mintel_id,attribute_id) VALUES 
(3,1),
(3,18),
(138,1),
(138,8),
(138,18),
(270,6),
(270,18),
(270,40),
(275,40),
(275,6),
(275,18),
(216,3),
(216,7),
(216,18),
(216,19),
(216,30);

# DAIRY
INSERT INTO mintel_comp(mintel_id,attribute_id) VALUES 
(3,1),
(3,18),
(138,1),
(138,8),
(138,18),
(270,6),
(270,18),
(270,40),
(275,40),
(275,6),
(275,18),
(216,3),
(216,7),
(216,18),
(216,19),
(216,30);

DROP TABLE IF EXISTS tmp_results;