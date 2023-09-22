select 
  posts.id, 
  count(*) as votecount 
from 
  posts 
  inner join votes on posts.id = votes.postId 
where 
  votes.votetypeid = 2 
  and (
    posts.creationDate >= '2015-01-01' 
    and posts.creationDate < '2016-01-01'
  ) 
group by 
  posts.id 
order by 
  votecount desc 
limit 
  10
