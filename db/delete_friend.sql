delete * from friends 
where user_id = $1 AND friend_id = $2;

delete * from friends 
where user_id = $2 AND friend_id = $1;

