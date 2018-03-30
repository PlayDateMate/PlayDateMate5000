delete from friend_requests
where sender = $1
and reciever = $2;