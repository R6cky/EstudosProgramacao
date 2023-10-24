import express, { Application } from "express";
import { createClient, listClient } from "./logic/requests";

const app: Application = express();

app.use(express.json());

app.post("/", createClient);
app.get("/", listClient);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
