select * from event_invites
join users on users.id = receiver
and receiver_status = 'pending'
where sender = $1;