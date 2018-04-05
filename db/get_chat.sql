select * from messages 
where sender_id in ($1, $2) and receiver_id in ($1, $2);