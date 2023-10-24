    UPDATE clientes SET name='Vinicius' WHERE id=1;

    UPDATE clientes SET name='Undefined' WHERE id > 3;

    UPDATE 
        clientes 
    SET saldo=0 
    WHERE name = 'Undefined';


      UPDATE 
        clientes
      SET
        "name" = 'Tatu',
        "saldo" = 500
      WHERE 
        id > 3
      RETURNING *; -- RETORNA TUDO O QUE FOI ATUALIZADO, OU SEJA, name e saldo. 




    --EXEMPLO DE ATUALIZACAO DINAMICA DOS DADOS COM O EXPRESS.
      UPDATE 
        movies
      SET
        name = $1,
        description = $2,
        duration = $3,
        price = $4,
      WHERE 
        id = $5
      RETURNING *;


      