select *, age(dob) from children 
where user_id = $1;