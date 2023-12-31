select 
  count(id) as numberOfPosts, 
  extract (
    year 
    from 
      creationdate
  ) as year 
from 
  posts 
where 
  posttypeid = 1 
group by 
  year;
