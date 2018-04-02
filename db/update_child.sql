update children
set child_name = $2, dob = $3, gender = $4, interests = $5
where id = $1;