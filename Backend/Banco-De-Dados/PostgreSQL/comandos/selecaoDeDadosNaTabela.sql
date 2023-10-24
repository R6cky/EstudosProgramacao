SELECT * FROM cliente ;


SELECT * FROM 
	cliente 
WHERE 
	active  = TRUE;



SELECT  "nome" ,"active" 
FROM cliente 
WHERE 
	"age" > 18;


SELECT * FROM 
	cliente 
WHERE nome ILIKE '%ei%';


SELECT 
	nome, id
FROM cliente
WHERE  active = FALSE;


SELECT *
FROM clientes
WHERE nome LIKE '_____'; -- SELECONA TODOS OS DADOS DA COLUNA nome QUE POSSUI EXATAMENTE 5 caracteres



SELECT * FROM 
	cliente 
WHERE "nome" ILIKE '____ton'; -- POSSUI EXATAMENTE 7 CARACTERS E TERMINA COM "TON"



SELECT max("saldo") maior_saldo FROM clientes ; -- maior valor da coluna SALDO
SELECT min("saldo") menor saldo FROM clientes ; -- menor valor da coluna SALDO

SELECT avg(price) media_preco from work_orders; -- media PRECO
SELECT avg(saldo) media_saldo FORM clientes;  -- MEDIA PRICE com o ALIAS media_saldo


SELECT  COUNT(*) FROM clientes WHERE saldo > 5000;


