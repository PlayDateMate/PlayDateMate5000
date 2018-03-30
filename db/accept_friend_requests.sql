update friend_requests
set reciever_status = 'accepted'
where sender = $1
and reciever = $2;