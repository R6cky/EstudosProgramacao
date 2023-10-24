/*Instruções em banco de dados MySQL*/



/* Criando base de dados*/
CREATE DATABASE minha_base_de_dados



/**********************************************************************************/


/*Criando tabela*/

CREATE TABLE pessoas (

id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome varchar (20) NOT NULL, 
sobrenome VARCHAR NOT NULL(30),
nascimento DATE 
)


/**********************************************************************************/


/*Inserindo dados na tabela pessoa*/

INSERT INTO pessoas (nome, sobrenome, nascimento) VALUES ('Marcia', 'Aguiar', '1990-06-10');
INSERT INTO pessoas (nome, sobrenome, nascimento) VALUES ('Pedro', 'Fernandes', '1991-06-18');
INSERT INTO pessoas (nome, sobrenome, nascimento) VALUES ('Hernany', 'Reis', '1989-01-19');


/**********************************************************************************/


/*Selecionando os dados da tabela pessoa, os dados vão ser retornados na tela*/
SELECT * FROM pessoas


/**********************************************************************************/



/*Selecionando os dados da coluna NOME, da tabela pessoa */
SELECT nome FROM pessoa



/**********************************************************************************/



/*Selecionando os dados da coluna NOME, da tabela pessoa e que possui o ID 1 */
SELECT * FROM `pessoa` WHERE 1


/**********************************************************************************/



/*Atualizando dados(nome) na tabela através do ID */
UPDATE pessoas SET nome = 'Cleiton' WHERE id=1


/**********************************************************************************/



/*Deletando dados referente ao id setado*/
DELETE FROM pessoas WHERE id=3;


/**********************************************************************************/



/*ORDENAR OS DADOS - ORDER BY*/

/*Lista e ordena em ordem alfabética*/
SELECT * FROM pessoas ORDER BY nome




/*Lista e ordena em ordem alfabética decrescente*/
SELECT * FROM pessoas ORDER BY nome DESC




/*Lista e ordena de forma numérica crescente*/
SELECT * FROM pessoas ORDER BY id






/*Inserindo coluna genero em tabela pessoas*/
ALTER TABLE `pessoas` ADD `genero` VARCHAR(1) NOT NULL ;





/*Inserindo coluna escolaridade em tabel pessoas*/
ALTER TABLE pessoas ADD escolaridade VARCHAR(30) NOT NULL ;




/*Contagem de gêneros, tomando como referência o ID*/ 
SELECT COUNT(id), genero FROM pessoas GROUP BY genero



