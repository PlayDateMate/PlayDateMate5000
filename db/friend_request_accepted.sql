update table friends
set status = 'accepted'
where user_id = $1 AND friend_id = $2