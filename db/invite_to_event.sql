-- insert into eventinvites (user_id, friend_id, status)
-- values ($1, $2, 'accepted');

-- insert into eventinvites (user_id, friend_id)
-- values ($2, $1, 'pending');

insert into eventinvites
(user_id, friend_id, status, event_id)
values($1, $2, 'pending', $3);

