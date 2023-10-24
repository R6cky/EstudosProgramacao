import { QueryResult } from "pg";

export type tClientWithId = {
  id: string;
  nome: string;
  sobrenome: string;
  sexo: string;
  email: string;
  senha: string;
  imagem: string;
};

export type tClientRequest = Omit<tClientWithId, "id">;

export type tClientResult = QueryResult<tClientWithId>;
