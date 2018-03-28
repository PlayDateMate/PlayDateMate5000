delete * from eventinvites
where event_id = $1;

delete * from events
where id = $1;