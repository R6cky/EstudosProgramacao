import express, { Application, Request, Response } from "express";
import {
  createWorkOrder,
  deleteWorkOrder,
  listWorkOrder,
  serializeDataOrderRequest,
} from "./logic";

const app: Application = express();
app.use(express.json());

app.post("/work-order", createWorkOrder);

app.get("/work-order", listWorkOrder);

app.delete("/work-order/:id", deleteWorkOrder);

app.listen(2000, () => {
  console.log("Server is running!");
});
