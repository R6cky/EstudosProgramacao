/*RELACIONAMENTO ENTRE TABELAS




PROJETO

Database YT 

Vídeos (id, autor, titulo, likes, dislikes)

playlist (id, videos, title)

SEO (id, categorys)

Author (id, name)




CRIAR RELACIONAMENTOS

Vídeo com SEO e Author



CREATE TABLE videos (

id_videos INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
autor VARCHAR(20),
titulo VARCHAR (50)
likes INT (3)
dislikes INT (3)
)



INSERT INTO videos (autor, titulo, likes, dislikes) VALUES ('Maria', 'mySQL', 10, 2);

INSERT INTO videos (autor, titulo, likes, dislikes) VALUES ('Joao', 'HTML', 15, 1);

INSERT INTO videos (autor, titulo, likes, dislikes) VALUES ('Maria', 'CSS', 18, 3);

INSERT INTO videos (autor, titulo, likes, dislikes) VALUES ('Pedro', 'Java Script', 38, 5);

INSERT INTO videos (autor, titulo, likes, dislikes) VALUES ('Maria', 'Python', 99, 10);

-------------------------------------------------------------------

*/


/*Entender relacionamentos*/





/*Criar uma modelagem de banco*/