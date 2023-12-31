select 
  to_char(tb1.creationdate, 'day') as dayinweek, 
  count(*) as cnt 
from 
  (
    select 
      * 
    from 
      posts 
    where 
      posttypeid = 2
  ) tb1, 
  (
    select 
      * 
    from 
      posts
  ) tb2 
where 
  tb1.parentid = tb2.id 
  and extract(
    year 
    from 
      age(
        tb1.creationdate, tb2.creationdate
      )
  )= 0 
  and extract(
    month 
    from 
      age(
        tb1.creationdate, tb2.creationdate
      )
  )= 0 
  and extract(
    day 
    from 
      age(
        tb1.creationdate, tb2.creationdate
      )
  )= 0 
  and extract(
    hour 
    from 
      age(
        tb1.creationdate, tb2.creationdate
      )
  )= 0 
group by 
  dayinweek 
order by 
  cnt desc 
limit 
  1;
