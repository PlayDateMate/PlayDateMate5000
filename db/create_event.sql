insert into events ( user_id , event_description, address, event_name, start_date, end_date, age_min, age_max, city, zipcode, privacy)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);