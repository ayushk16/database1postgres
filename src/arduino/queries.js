/* eslint-disable no-undef */
const getPosts = "SELECT * FROM posts;";
const getPostById = "SELECT * FROM posts WHERE id = $1;";

const percentageOfAnsweredPosts = `select (count(*) * 100/(select count(*) from posts where posttypeid=1)) as percentage
from posts
where 
	posttypeid = 1 and acceptedanswerid is not null;`;

const topReputationUser = `select * 
from users
order by reputation desc
limit 10 ;
`;

const mostQuestionAnswered = `select to_char(p2.creationdate,'day') as nameofday, count(*) from posts p1,posts p2
where p1.posttypeid=2
and p1.parentid=p2.id
and extract(year from age(p1.creationdate,p2.creationdate))=0
and extract(month from age(p1.creationdate,p2.creationdate))=0
and extract(day from age(p1.creationdate,p2.creationdate))=0
and extract(hour from age(p1.creationdate,p2.creationdate))=0
group by nameofday
order by count desc;
`

const topUpvotedPosts = `
select posts.id , count(*) as votecount  from posts
	inner join votes
	on posts.id = votes.postId
	where votes.votetypeid = 2 and (posts.creationDate >= '2015-01-01' and posts.creationDate < '2016-01-01')
	
group by posts.id
order by votecount desc
limit 10 ;`;

const tagsAssosiatedWithMostPost = `select tagname from tags
order by count desc
limit 5 offset 0;`;

const questionsAskedEveryYear = `select count(id) as numberOfPosts , extract (year from creationdate) as year  from posts
where posttypeid = 1
group by year`;

const scores = `
select id,displayname,upvotes,downvotes,c.comment_count,p.post_count,(c.comment_score+upvotes+downvotes+p.post_score) as total_score from users u
inner join (select userid,count(*) as comment_count,count(*)*3 as comment_score from comments
group by userid) c
on c.userid = u.id
inner join (select owneruserid, count(*) AS post_count, count(*) * 10 as post_score
    from posts
    group by owneruserid) p
	on p.owneruserid = u.id
order by total_score desc
limit  5
`;

const mostUsage = `select 
extract(year from creationdate),
count(*) as numberOfposts,
cast(case when extract(year from creationdate)!=2023 then 'true' else 'false' end as text)as "decline usage"  from posts
group by extract(year from creationdate)
order by numberofposts desc
limit 1;`

module.exports = {
    getPosts,
    getPostById,
    mostQuestionAnswered,
    percentageOfAnsweredPosts,
    topReputationUser,
    topUpvotedPosts,
    tagsAssosiatedWithMostPost,
    questionsAskedEveryYear,
    mostUsage,
    scores,
}