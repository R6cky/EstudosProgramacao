import express, { Application } from "express";
import { main } from "./logic";
import { client } from "./database";

const app: Application = express();
app.use(express.json());

app.post("/", main);

app.listen(4000, () => {
  client.connect();
  console.log("Database connected!");
  console.log("Server running");
});
