
INSERT INTO 
	cliente("nome","active", "age")
VALUES 
	('cleber', TRUE, 17),
	('marcio', TRUE, 65),
	('carla', TRUE, 16);



INSERT INTO 
	compra("dateExemplo", "timeExemplo", "timestampExemplo")
VALUES 
	('2021-05-25', '12:45:25', '2021-05-25' );


INSERT INTO 
	cliente("nome", "active", "age")
VALUES ('João Carlos', TRUE, 28);
RETURNING *; --RETORNA TUDO.


INSERT INTO 
	cliente("nome", "age")
VALUES('clelson', 28) 
	RETURNING "nome"; --RETORNA O NOME


INSERT INTO
 	movies (name, description, duration, price)
VALUES 
	('Batman', 'Filme em cartaz nos cinemas', 120,200),
	('Anjos da noite', 'Filme de vampiros', 100,80),
	('No limite', 'Filme de ação', 60,30);
