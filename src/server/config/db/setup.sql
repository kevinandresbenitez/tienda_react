CREATE TABLE "user"(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  last_name VARCHAR(50),
  password VARCHAR(100),
  email VARCHAR(20) UNIQUE
);
/*Test password =123123123*/
insert into "user" values(1,'Kevin','Benitez','$2b$10$5cfCdXl/K7mcoYNgcAK5C.KoG9zgRHFb2wcyD3jEPJgLI.r63ni7q','ele@gmail.com');

CREATE TABLE userAdmin(
  id_user INT REFERENCES "user"(id) ON DELETE CASCADE,
  PRIMARY KEY (id_user)
);


CREATE TYPE status_type AS ENUM(
  'preparation',
  'on_the_way',
  'finalized'
);

CREATE TABLE product(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  price DECIMAL(10, 2),
  info TEXT,  
  img_texture TEXT 
);


CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  id_user INT REFERENCES "user"(id) ON DELETE CASCADE,
  id_product INT REFERENCES product(id) ON DELETE CASCADE,
  date_purchase TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_arrival TIMESTAMP,
  amount INT,
  total_price DECIMAL(10, 2),
  status status_type
);




CREATE TABLE product_version (
  id SERIAL PRIMARY KEY,
  id_product INT REFERENCES product(id) ON DELETE CASCADE,
  color_name VARCHAR(100),
  color_rgb VARCHAR(7),
  stock INT,
  img TEXT 
);

-- Insersiones

-- 1
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (1,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_35c84fb1d48540f1886b2ceb7a342c37~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_35c84fb1d48540f1886b2ceb7a342c37~mv2_d_3500_1968_s_2.jpg');

-- Versión naranja
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (1,1, 'Naranja', '#FFA500', 50, 'https://static.wixstatic.com/media/45d10e_dd5d9543998c4c0f9ecf120fac20ffb0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_dd5d9543998c4c0f9ecf120fac20ffb0~mv2.jpg');

-- Versión rosa
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (2,1, 'Rosa', '#FF1493', 30, 'https://static.wixstatic.com/media/45d10e_d6445cbc0df2428d9348c3a7639dbed8~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_d6445cbc0df2428d9348c3a7639dbed8~mv2.jpg');

-- 2
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (2,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_0a7831138003425684827b5eedb8813a~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_0a7831138003425684827b5eedb8813a~mv2_d_3500_1968_s_2.jpg');
-- Versión morado claro
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (3,2, 'Morado Claro', '#D8A7FF', 50, 'https://static.wixstatic.com/media/45d10e_15641be40e0c43d89f5426f8949b51bd~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_15641be40e0c43d89f5426f8949b51bd~mv2.jpg');

-- Versión menta
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (4,2, 'Menta', '#98FF98', 30, 'https://static.wixstatic.com/media/45d10e_3f6b16a5b6f245adb42be86ef69705b9~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_3f6b16a5b6f245adb42be86ef69705b9~mv2.jpg');

-- 3 
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (3,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_4f8f19f78fe64963b0861ad87b8984fa~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_4f8f19f78fe64963b0861ad87b8984fa~mv2_d_3500_1968_s_2.jpg');
-- Versión verde
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (5,3, 'Verde', '#008000', 50, 'https://static.wixstatic.com/media/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg');
-- 4
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (4,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_634904991ab140089d95a832cac3ec03~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_634904991ab140089d95a832cac3ec03~mv2_d_3500_1968_s_2.jpg');

-- Versión azul
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (6,4, 'Azul', '#0000FF', 50, 'https://static.wixstatic.com/media/45d10e_1d14719f23fa4277bddd33220562c678~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_1d14719f23fa4277bddd33220562c678~mv2.jpg');
-- 5 
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (5,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_fcf0fc02da714ac993c176af2ae771fb~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_fcf0fc02da714ac993c176af2ae771fb~mv2_d_3500_1968_s_2.jpg');
-- version negro
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (7,5, 'Negro', '#000000', 50, 'https://static.wixstatic.com/media/45d10e_b35e4713f3524a1d818de736bb4765b2~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_b35e4713f3524a1d818de736bb4765b2~mv2.jpg');

-- 6
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (6,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_fba225710b3b49dfa8c8617610cd9358~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_fba225710b3b49dfa8c8617610cd9358~mv2_d_3500_1968_s_2.jpg');

-- version negro
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (8,6, 'Negro', '#000000', 50, 'https://static.wixstatic.com/media/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg');

-- 7
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (7,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_291e40a5e013492795a1e7b2543fd84f~mv2_d_3500_1968_s_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_291e40a5e013492795a1e7b2543fd84f~mv2_d_3500_1968_s_2.jpg');
-- Versión multicolor
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (9,7, 'Multicolor', '#FF5733', 50, 'https://static.wixstatic.com/media/45d10e_45e21af15e5a4e2fa81bc324b0c51cbf~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_45e21af15e5a4e2fa81bc324b0c51cbf~mv2.jpg');
-- 8
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (8,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_b20e57309af44269b6655ce248bca487~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_b20e57309af44269b6655ce248bca487~mv2_d_3500_1968_s_2.jpg');
-- Versión naranja
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (10,8, 'Naranja', '#FFA500', 50, 'https://static.wixstatic.com/media/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg');
-- 9
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (9,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_20a938f8eca444a1ab34b1b2d361b71f~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_20a938f8eca444a1ab34b1b2d361b71f~mv2_d_3500_1968_s_2.jpg');
-- Versión morado
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (11,9, 'Morado', '#800080', 50, 'https://static.wixstatic.com/media/45d10e_871191908b1c4045995538d0a943a5a3~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_871191908b1c4045995538d0a943a5a3~mv2.jpg');
-- 10
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (10,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_7534171f1db24b66af322f721a90d7c7~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_7534171f1db24b66af322f721a90d7c7~mv2_d_3500_1968_s_2.jpg');
-- Versión azul claro
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (12,10, 'Azul Claro', '#ADD8E6', 50, 'https://static.wixstatic.com/media/45d10e_0e8c51e5fcbe457397c2823e833cfa62~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_0e8c51e5fcbe457397c2823e833cfa62~mv2.jpg');
-- 11 
INSERT INTO product (id ,name, description, price, info, img_texture)
VALUES
  (11,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_bebe0265a9644b8697b873a11de242f6~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_bebe0265a9644b8697b873a11de242f6~mv2_d_3500_1968_s_2.jpg');
-- Versión rosa
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (13,11, 'Rosa', '#FF69B4', 50, 'https://static.wixstatic.com/media/45d10e_e72efca453234bfda3baa6dde357e4d8~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_e72efca453234bfda3baa6dde357e4d8~mv2.jpg');
-- 12
INSERT INTO product (id,name, description, price, info, img_texture)
VALUES
  (12,'Bolsos Elegantes', 'Bolsos de alta calidad en diferentes colores. Perfectos para cualquier ocasión.', 79.99, 'Bolsos con materiales resistentes y elegantes, disponibles en varios colores.', 'https://static.wixstatic.com/media/45d10e_85b84e09e8964627bcb095a52463344e~mv2_d_3500_1968_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_85b84e09e8964627bcb095a52463344e~mv2_d_3500_1968_s_2.jpg');

-- Versión amarilla
INSERT INTO product_version (id,id_product, color_name, color_rgb, stock, img)
VALUES
  (14,12, 'Amarillo', '#FFFF00', 50, 'https://static.wixstatic.com/media/45d10e_f2827033127e4856b9b030067d81bba2~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_f2827033127e4856b9b030067d81bba2~mv2.jpg');
