CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  last_name VARCHAR(50),
  password VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  address TEXT
);

CREATE TABLE userAdmin (
  id_user INT REFERENCES "user"(id) ON DELETE CASCADE,
  PRIMARY KEY (id_user)
);


CREATE TYPE status_type AS ENUM (
  'preparation',
  'on_the_way',
  'finalized'
);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  id_user INT REFERENCES "user"(id) ON DELETE CASCADE,
  id_product INT REFERENCES product(id) ON DELETE CASCADE,
  date_purchase TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_arrival TIMESTAMP,
  amount INT,
  total_price DECIMAL(10, 2),
  status status_type
);


CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  price DECIMAL(10, 2),
  info TEXT,  
  img_texture TEXT 
);

CREATE TABLE product_version (
  id SERIAL PRIMARY KEY,
  id_product INT REFERENCES product(id) ON DELETE CASCADE,
  color_name VARCHAR(100),
  color_rgb VARCHAR(7),
  stock INT,
  img TEXT 
