CREATE TABLE 
    developers("id" SERIAL PRIMARY KEY, "nome" VARCHAR(20), "salario" INTEGER);

CREATE TABLE IF NOT EXISTS cliente("id" SERIAL PRIMARY KEY, "nome" VARCHAR(30) NOT NULL, "active" BOOLEAN DEFAULT FALSE, age INTEGER);


CREATE TABLE compra("dateExemplo" DATE, "timeExemplo" TIME, "timestampExemplo" TIMESTAMP );

-- Com a restrição check
CREATE TABLE pagamentos("id" SERIAL PRIMARY KEY, "valor" NUMERIC(10,2), CHECK("valor" > 20));


CREATE TABLE compra("dateExemplo" DATE, "timeExemplo" TIME, "timestampExemplo" TIMESTAMP );
