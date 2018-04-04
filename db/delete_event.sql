delete from event_invites
where event_id = $1;

delete from events
where id = $1;

-- first line for upcoming events