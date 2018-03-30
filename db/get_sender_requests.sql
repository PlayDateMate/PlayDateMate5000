select * from friend_requests
join users on users.id = reciever
and reciever_status = 'pending'
where sender = $1;


