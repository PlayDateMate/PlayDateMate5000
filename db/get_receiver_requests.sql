select * from friend_requests
join users on users.id = sender
and reciever_status = 'pending'
where reciever = $1;
