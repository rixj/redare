SELECT * FROM redare.comp_info;

SELECT * FROM comp_info;

SELECT  c.id, CONCAT(c.category,': ',c.model_criteria,': ',c.label) AS Category 
FROM comp_info c;

select 
  p.prod_name,
  sum(case when r.rep_name = 'John' then s.quantity else 0 end) as John,
  sum(case when r.rep_name = 'Sally' then s.quantity else 0 end) as Sally,
  sum(case when r.rep_name = 'Joe' then s.quantity else 0 end) as Joe,
  sum(case when r.rep_name = 'Bob' then s.quantity else 0 end) as Bob
from products p
inner join sales s
  on p.prod_id = s.prod_id
inner join reps r
  on s.rep_id = r.rep_id
group by p.prod_name;