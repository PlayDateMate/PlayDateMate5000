-- events I have accepted to attend and events created my me

select * from attending_event
join events on event_id = events.id
where attending_event.user_id = $1