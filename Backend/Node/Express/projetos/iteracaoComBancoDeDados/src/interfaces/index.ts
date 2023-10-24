export type ClientConfig = {
  user?: string | undefined;
  password?: string | undefined;
  host?: string | undefined;
  database?: string | undefined;
  port?: number | undefined;
  connect: any;
};

interface QueryResult {
  command: string;
  rowCount: number;
  fields: Array<any>;
  rows: Array<any>;
}
