
-- ADICIONANDO COLUNA NA TABELA 

ALTER TABLE users_products
ADD COLUMN "nameProduct" varchar(100);


-- RENOMEANDO A TABELA
ALTER TABLE 
	users_products  
RENAME TO 
	compra_users_product;

  

-- RENOMEANDO COLUNA NA TABELA
ALTER TABLE 
	compra_users_product  
RENAME COLUMN "nameProduct" 
TO description;



