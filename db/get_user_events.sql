-- select * from events 
-- where user_id = $1;

select * from attending_event
join events on event_id = events.id
where attending_event.user_id = $1