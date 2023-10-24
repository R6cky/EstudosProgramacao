import express, { Application } from "express";
import { main } from "./logic";

const app: Application = express();

app.use(express.json());

app.post("/", main);

app.listen(4000, () => {
  console.log("server running on port 4000");
});
