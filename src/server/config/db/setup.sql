create table "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,  
    email VARCHAR(100) NOT NULL  
);