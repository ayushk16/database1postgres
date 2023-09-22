select 
  id, 
  (
    upvotes + downvotes + commentTable.commentScore + postTable.postScore
  ) as totalScore 
from 
  users userTable
  inner join (
    select 
      userid, 
      count(*)* 3 as commentScore 
    from 
      comments 
    group by 
      userid 
    order by 
      userid
  ) commentTable on commentTable.userid = userTable.id 
  inner join (
    select 
      owneruserid, 
      count(*)* 10 as postScore 
    from 
      posts 
    group by 
      owneruserid
  ) postTable on userTable.id = postTable.owneruserid 
order by 
  totalScore desc 
limit 
  5;
