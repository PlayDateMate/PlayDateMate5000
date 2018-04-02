delete from event_invites
where sender = $1
and event_id = $2;