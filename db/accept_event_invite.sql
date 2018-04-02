update event_invites
set receiver_status = 'accepted'
where sender = $1
and reciever = $2;

insert into attending_event (user_id, event_id)
values($1, $2);