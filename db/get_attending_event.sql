select * from attending_event
join users on users.id = attending_event.user_id
where user_id = $1