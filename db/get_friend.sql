select * from friends
join users on users.id = friend_id
where user_id = $1