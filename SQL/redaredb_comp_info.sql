/*
DROP TABLE IF EXISTS comp_info
*/
CREATE TABLE mintel_comp(
	mintel_id INT NOT NULL REFERENCES mintel(id),
	attribute_id INT NOT NULL REFERENCES attribute(id),
	CONSTRAINT pk_mintel_attribute PRIMARY KEY (mintel_id, attribute_id)
);


CREATE TABLE comp_info (
	id INT NOT NULL AUTO_INCREMENT
	,category VARCHAR(13)
	,model_criteria VARCHAR(19)
	,label VARCHAR(45)
	,links VARCHAR(111)
	,PRIMARY KEY (id)
	);
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Firm-wide','Green Dot Finanical Contribution to Recycling','https://www.pro-e.org/the-green-dot-trademark');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Firm-wide','AISE Voluntary Sustainability Intiative','https://www.sustainable-cleaning.com/en.home.orb');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Firm-wide','CO2 Compensated','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Firm-wide','B Corp','https://bcorporation.net/');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Firm-wide','1% for the planet','https://www.onepercentfortheplanet.org/');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Life Cycle EcoLabel','Nordic Swan Ecolabel','https://www.nordic-ecolabel.org/product-groups/group/?productGroupCode=026');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Life Cycle EcoLabel','EU Ecolabel','https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2017.180.01.0045.01.ENG&toc=OJ:L:2017:180:TOC');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Life Cycle EcoLabel','Good Environmental Choice "Bra MiljÁval"','https://www.naturskyddsforeningen.se/bra-miljoval/kemiska-produkter');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Life Cycle EcoLabel','Blue Angel','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Organic','EcoCert','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Organic','EU Organic Logo','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Organic','KRAV','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Organic','Bio Suisse','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Organic','Debio','https://debio.no/debios-merker/');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Organic','Self-Declared Organic','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Organic','Soil Association Organic','https://www.soilassociation.org/');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Biodynamic','Demeter','https://www.demeter-usa.org/media/');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Packaging','Packaging Made of Recycled Materials','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Packaging','Recyclable Mobius Loop (able to be recycled)','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Packaging','Made of 100% Recycled Materials','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Packaging','Recyclable (Guy Recycling)','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Packaging','Compostability Mark of European Bioplastics','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Packaging','Forest Stewardship Council (FSC)','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Packaging','PEFC','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Packaging','Terracycle','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','EcoLabel','Marine Stewardship Council','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','EcoLabel','Natrue','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','EcoLabel','Rainforest Alliance Certified','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','EcoLabel','UTZ Certified','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Animal Welfare','Leaping Bunny Animal Welfare Label','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Animal Welfare','Vegan Society Circle','https://www.vegansociety.com/your-business/about-vegan-trademark');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Animal Welfare','Cruelty Free and Vegan (Rabbit Face)','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Animal Welfare','V-Label.eu Vegan Logo','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Animal Welfare','Certified Vegan (Vegan.org)','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Animal Welfare','Dolphin Safe/Dolphin Friendly','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Animal Welfare','Self-Seclared Vegan','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Animal Welfare','Vegetarian Society Approved Vegetarian','https://vegsoc.org/vegetarian-and-vegan-trademarks/');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Animal Welfare','Vegetarian Society Approved Vegan','https://vegsoc.org/vegetarian-and-vegan-trademarks/');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Firm-wide','Good Shopping Guide Ethical Award','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Health','Asthma Allergy Nordic Label','https://www.asthmaallergynordic.com/about');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Health','Eesti Allergialiit tunnustab','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Social Welfare','Fair Trade','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Social Welfare','Hand In Hand','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Social','Health','Other Self-Declared Heath (notes)','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Other','N/A','Ingredients','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Environmental','Firm-Wide','Other Firm-Wide Environmental Policy','N/A');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Other','N/A','From Sweden','https://fransverige.se/konsument/vad-ar-fran-sverige/market-mjolk-fran-sverige/');
INSERT INTO comp_info(category,model_criteria,label,links) VALUES ('Other','N/A','Svensk MjÁlk','https://www.arla.se/produkter/naturligare-produkter/ursprungsmarkning/');


CREATE VIEW view_sheetDairyHeaders (today) AS SELECT CURRENT_DATE;

SELECT c.id, CONCAT(c.category,': ',c.model_criteria,': ',c.label) AS Category 
FROM comp_info c;

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