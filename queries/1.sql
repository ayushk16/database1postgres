select 
  count(*) * 100 / (
    select 
      count(*) as totalques 
    from 
      posts 
    where 
      posttypeid = 1
  ) 
from 
  posts 
where 
  posttypeid = 1 
  and answercount >= 1;
