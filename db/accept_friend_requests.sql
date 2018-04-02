update friend_requests
set reciever_status = 'accepted'
where sender = $1
and reciever = $2;

insert into friends (user_id, friend_id)
values($1, $2);

insert into friends (user_id, friend_id)
values($2, $1);

