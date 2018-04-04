
insert into attending_event (event_id, user_id)
values($1, $2);

delete from event_invites
where event_id = $1
and receiver = $2