WITH LeastUsedTags AS (
  SELECT 
    tagname 
  FROM 
    tags 
  ORDER BY 
    COUNT ASC 
  limit 
    10
) 
SELECT 
  p.* 
FROM 
  posts p 
  JOIN tags t ON p.tags LIKE CONCAT('%', t.tagname, '%') 
WHERE 
  t.tagname IN (
    SELECT 
      tagname 
    FROM 
      LeastUsedTags
  ) 
  and extract(
    year 
    from 
      p.creationdate
  )= 2014
