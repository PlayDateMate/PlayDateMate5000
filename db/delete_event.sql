delete from event_invites
where receiver = $1 
and id = $2;

select * from attending_event
join events on event_id = events.id
where attending_event.user_id = $1;