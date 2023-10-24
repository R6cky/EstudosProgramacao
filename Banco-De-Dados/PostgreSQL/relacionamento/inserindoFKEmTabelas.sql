
CREATE TABLE IF NOT EXISTS addresses (

"id" SERIAL PRIMARY KEY, 
"street" VARCHAR(25) NOT NULL,
"number" VARCHAR(8) NOT NULL,
"postalCode" VARCHAR(10) NOT NULL,
"complememt" VARCHAR(30) NOT NULL);


CREATE TABLE IF NOT EXISTS mechanicals (

"id" SERIAL PRIMARY KEY,
"name" VARCHAR(60),
"registrationNumber" VARCHAR(4) NOT NULL UNIQUE,
"addressId" INTEGER UNIQUE,
FOREIGN KEY("addressId") REFERENCES addresses("id")
)

