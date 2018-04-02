select * from event_invites
join users on users.id = sender
and receiver_status = 'pending'
where receiver = $1;