CREATE TABLE 
	users
("id" SERIAL PRIMARY KEY, 
 "name" VARCHAR(50) NOT NULL,
 "age" integer NOT NULL,
 "active" boolean DEFAULT TRUE);
 

CREATE TABLE 
	products
("id" SERIAL PRIMARY KEY, 
 "name" VARCHAR(50) NOT NULL,
 "price" numeric(10,2) NOT NULL);
 


CREATE TABLE 
	compras_users_products
("id" SERIAL PRIMARY KEY,
"description" varchar(100) NOT NULL, 
"productsId" integer,
 "usersId" integer,
 FOREIGN KEY("productsId") REFERENCES products("id"),
 FOREIGN KEY("usersId") REFERENCES users("id"));