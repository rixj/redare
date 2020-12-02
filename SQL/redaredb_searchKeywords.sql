/*
https://stackoverflow.com/questions/37213789/split-a-string-and-loop-through-values-in-mysql-procedure
https://stackoverflow.com/questions/14506871/how-to-execute-a-stored-procedure-inside-a-select-query
SELECT * FROM rds_product
SELECT * FROM mintel_comp
SELECT * FROM comp_info
*/
DELIMITER $$

DROP PROCEDURE IF EXISTS `insert_csv` $$
CREATE PROCEDURE `insert_csv`(_list MEDIUMTEXT)
BEGIN

DECLARE _next TEXT DEFAULT NULL;
DECLARE _nextlen INT DEFAULT NULL;
DECLARE _value TEXT DEFAULT NULL;

iterator:
LOOP
  -- exit the loop if the list seems empty or was null;
  -- this extra caution is necessary to avoid an endless loop in the proc.
  IF LENGTH(TRIM(_list)) = 0 OR _list IS NULL THEN
    LEAVE iterator;
  END IF;

  -- capture the next value from the list
  SET _next = SUBSTRING_INDEX(_list,',',1);

  -- save the length of the captured value; we will need to remove this
  -- many characters + 1 from the beginning of the string 
  -- before the next iteration
  SET _nextlen = LENGTH(_next);

  -- trim the value of leading and trailing spaces, in case of sloppy CSV strings
  SET _value = TRIM(_next);

  -- insert the extracted value into the target table
  INSERT INTO t1 (c1) VALUES (_value);

  -- rewrite the original string using the `INSERT()` string function,
  -- args are original string, start position, how many characters to remove, 
  -- and what to "insert" in their place (in this case, we "insert"
  -- an empty string, which removes _nextlen + 1 characters)
  SET _list = INSERT(_list,1,_nextlen + 1,'');
END LOOP;

END $$

DELIMITER ;


SELECT SearchKeywords(group_concat(keywords)) FROM rds_product WHERE