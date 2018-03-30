insert into friend_requests
(sender, reciever, reciever_status)
values($1, $2, 'pending');