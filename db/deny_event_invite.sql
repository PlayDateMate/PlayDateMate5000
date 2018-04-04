delete from event_invites
where sender = $1
and receiver = $2;