/* eslint-disable no-undef */
const getPosts = "SELECT * FROM posts;";
const getPostById = "SELECT * FROM posts WHERE id = $1;";

const percentageOfAnsweredPosts = `select (count(*) * 100/(select count(*) from posts where answercount is not null)) as percentage
from posts
where 
	posttypeid = 1 and acceptedanswerid is not null;`;

const topReputationUser = `select * 
from users
order by reputation desc
limit 10 ;
`;

const mostQuestionAnswered = `select to_char(tb1.creationdate,'day') as dayinweek , count(*) as cnt 
from 
(select * from posts
    where posttypeid = 2) tb1 , 
(select * from posts) tb2
where tb1.parentid = tb2.id
and extract(year from age(tb1.creationdate,tb2.creationdate))=0
and extract(month from age(tb1.creationdate,tb2.creationdate))=0
and extract(day from age(tb1.creationdate,tb2.creationdate))=0
and extract(hour from age(tb1.creationdate,tb2.creationdate))=0

group by dayinweek
order by cnt desc
limit 1;
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

const questionsAssociatedLeastUsedTags = `WITH LeastUsedTags AS (
    SELECT tagname
    FROM tags
    ORDER BY COUNT ASC
	limit 10
)

SELECT p.*
FROM posts p
JOIN tags t ON p.tags LIKE CONCAT('%', t.tagname, '%')
WHERE t.tagname IN (SELECT tagname FROM LeastUsedTags) and extract(year from p.creationdate)=2014
`

const mostUsage = `select 
ps.years as mostusage, 
cast(case when avg(totalpostinyear)> (select count(*) from posts where extract(year from creationdate) = 2023) then 'true'
            else 'false' end as text) as "decline" 
from (
    select 
    extract(year from creationdate) as years , 
    count(*) as totalPostInYear 
    from 
        posts
    group by years
    order by totalPostInYear desc
) ps
group by ps.years
limit 1;`;

const scores = `select id ,(upvotes+downvotes+commentwala.commentScore+postwala.postScore)as totalScore  from users userwala
inner join (select userid , count(*)*3 as commentScore from comments
                group by userid
                order by userid
           ) commentwala
on commentwala.userid = userwala.id

inner join (select owneruserid , count(*)*10 as postScore from posts
    group by owneruserid) postwala
on userwala.id = postwala.owneruserid

order by totalScore desc
limit 5;
`;



module.exports = {
    getPosts,
    getPostById,
    mostQuestionAnswered,
    percentageOfAnsweredPosts,
    topReputationUser,
    topUpvotedPosts,
    tagsAssosiatedWithMostPost,
    questionsAskedEveryYear,
    questionsAssociatedLeastUsedTags,
    mostUsage,
    scores,
}