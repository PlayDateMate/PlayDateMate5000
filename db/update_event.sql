update events
set event_description =$2 , address = $3 , event_name = $4 , start_date = $5 , end_date = $6 , age_min = $7 , age_max = $8 , city = $9 , zipcode = $10 , privacy = $11
where event_id = $1;