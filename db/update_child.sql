update child
set child_name = $1, dob = $2, gender = $3, interests = $4
where user_id = 1 AND id = $2;