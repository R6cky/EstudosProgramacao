import { Request, Response } from "express";
import { Client, ClientConfig, QueryResult } from "pg";

const client = new Client({
  user: "postgres",
  password: "123456",
  host: "localhost",
  database: "iteracao",
  port: 5432,
});

client.connect();
console.log("conexão feita");

export const createClient = (req: Request, res: Response): Response => {
  const queryString: string = `
   INSERT INTO cliente (name, age)
   VALUES ('Cleiton', 29);
  `;

  client.query(queryString).finally(async () => {
    await client.end();
    console.log("conexão encerrada!");
  });
  return res.send("No ar");
};

export const listClient = async (Req: Request, res: Response) => {
  const queryString: string = `
  SELECT * FROM 
    cliente
  `;

  const queryResult: QueryResult = await client.query(queryString);

  return res.json(queryResult.rows);
};
