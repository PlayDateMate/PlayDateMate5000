select * from friend_requests
join users on users.id = $1
and reciever_status = 'pending'