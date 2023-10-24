import format from "pg-format";
import { tClientRequest, tClientResult, tClientWithId } from "./interfaces";
import { QueryResult } from "pg";
import { client } from "./database";

const insertQueryFormat = async (
  payload: tClientRequest
): Promise<tClientResult> => {
  const queryString: string = format(
    `
        INSERT INTO "cliente" (%I)
        VALUES (%L)
        RETURNING *;
    `,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: tClientResult = await client.query(queryString);
  return queryResult;
};

const startDatabase = async (): Promise<void> => {
  await client.connect();
  console.log("database connected!");
};

export const main = async (): Promise<void> => {
  await startDatabase();

  const newClient: tClientRequest = {
    nome: "Maria",
    sobrenome: "Reger",
    email: "maria@mail.com",
    senha: "123456",
    sexo: "feminino",
    imagem:
      "https://img.freepik.com/vetores-premium/rosto-de-jovem-negro-com-barba-retrato-masculino-ou-avatar-em-estilo-plano-vista-frontal_497399-251.jpg?w=2000",
  };

  const result: QueryResult<tClientWithId> = await insertQueryFormat(newClient);
  console.log(result.rows);
  await client.end();
};
