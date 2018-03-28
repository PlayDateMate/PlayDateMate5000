CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name text,
    email text,
    auth_id text,
    user_name text,
    image text,
    dob date,
    phone VARCHAR(20),
    hh_id integer
);