SELECT  * FROM  clientes ORDER  BY  id ASC  ;

SELECT * FROM clientes ORDER BY id DESC;

SELECT saldo FROM clientes GROUP BY saldo; -- NÃO RETORNA DADOS REPETIDOS

SELECT saldo  FROM  clientes; -- MOSTRA TODOS OS DADOS INCLUSIVE OS REPETIDOS


select count(*) 
    quantidade_orders, mechanical 
from 
	work_orders 
where  
	startdate  = '2023-01-01' 
group by 
	mechanical ; 




