
/*Operar com o comando line*/

/*
/opt/lampp/bin/mysql -u root ==> Executar o arquivo pela linha de comando

show databases; ==> Exibe os databases existentes

use nome_da_base_de_dados; ==> Seleciona a base de dados

show tables; ==> Mostra as taelas existentes

CREATE TABLE cursos(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(20)) ==> Cria tabela CURSOS

INSERT INTO cursos (nome) VALUES ('MySQL'); ==> Inserindo dados na tabela cursos, na categoria NOME

INSERT INTO cursos (nome) VALUES ('HTML'); ==> Insrindo dados na tabela CURSOS

INSERT INTO cursos (nome) VALUE ('CSS'); ==> Inserindo dados na tabela CURSOS

SELECT * FROM cursos; ==> Exibe os valores na tabela

UPDATE cursos SET nome='HTML5' WHERE id=2; ==> Atualizando dados na tabela

SELECT * FROM cursos WHERE nome='economia' ==>  Selecione tudo na tabela CURSOS onde nome seja igual a ECONOMIA

DELETE FROM cursos WHERE nome='Economia'; ==> Deleta na tabela CURSOS o nome ECONOMIA

ALTER TABLE cursos ADD carga_horaria INT(3); ==> Insere COLUNA carga_horaria na tabela CURSOS

UPDATE cursos SET carga_horaria=20; ==> Insere dados na coluna CARGA_HORARIA da tabela CURSOS

UPDATE cursos SET carga_horaria=15 WHERE id=3; => Alterando dados na coluna CARGA HORÁRIA da tabela CURSOS (através do ID)

DROP DATABASE teste ==> Excluindo a base de dados TESTE

DROP TABLE teste ==. Excluindo a tabela teste

*/ 





