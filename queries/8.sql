select 
  ps.years as mostusage, 
  cast(
    case when avg(totalpostinyear)> (
      select 
        count(*) 
      from 
        posts 
      where 
        extract(
          year 
          from 
            creationdate
        ) = 2023
    ) then 'true' else 'false' end as text
  ) as "decline" 
from 
  (
    select 
      extract(
        year 
        from 
          creationdate
      ) as years, 
      count(*) as totalPostInYear 
    from 
      posts 
    group by 
      years 
    order by 
      totalPostInYear desc
  ) ps 
group by 
  ps.years 
limit 
  1;
