insert into messages (sender_id, receiver_id, message)
values($1, $2, $3);

select * from messages 
where sender_id in ($1, $2) and receiver_id in ($1, $2);