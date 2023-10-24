import { Client, QueryConfig, QueryResult } from "pg";
import { tClientRequest, tClientResult, tClientWithId } from "./interface";

const client = new Client({
  user: "postgres",
  password: "123456",
  host: "localhost",
  database: "iteracao",
  port: 5432,
});

const startDatabase = async (): Promise<void> => {
  await client.connect();
  console.log("database connected!");
};

const insertQuery = async (payload: tClientRequest): Promise<tClientResult> => {
  const queryString: string = `

    INSERT INTO "cliente" ("nome", "sobrenome", "sexo", "email", "senha", "imagem") 
    VALUES ($1, $2, $3, $4, $5, $6 )
    RETURNING *;
    
    `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: Object.values(payload),
  };

  const queryResult: tClientResult = await client.query(queryConfig);
  return queryResult;
};

export const main = async (): Promise<void> => {
  await startDatabase();

  const newClient: tClientRequest = {
    nome: "Cleiton",
    sobrenome: "Rocha de Sousa",
    email: "cleiton@mail.com",
    senha: "123456",
    sexo: "masculino",
    imagem:
      "https://img.freepik.com/vetores-premium/rosto-de-jovem-negro-com-barba-retrato-masculino-ou-avatar-em-estilo-plano-vista-frontal_497399-251.jpg?w=2000",
  };

  const result: QueryResult<tClientWithId> = await insertQuery(newClient);
  console.log(result.rows);
  await client.end();
};
