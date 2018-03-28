update users
set zipcode = $2, about_user = $3
where user_id = $1;