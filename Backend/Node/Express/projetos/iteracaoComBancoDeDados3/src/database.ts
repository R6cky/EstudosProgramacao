import { Client } from "pg";

export const client = new Client({
  user: "postgres",
  password: "123456",
  host: "localhost",
  database: "iteracao",
  port: 5432,
});
