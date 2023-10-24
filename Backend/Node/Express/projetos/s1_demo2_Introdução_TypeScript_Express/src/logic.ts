import { Request, Response } from "express";
import { database } from "./database";
import { iWorkOrderRequest, iWorkOrderResponse } from "./interfaces";
import { v4 as uuidv4 } from "uuid";

const createWorkOrder = (req: Request, res: Response): Response => {
  const id = uuidv4();
  const orderData: iWorkOrderRequest = req.body;
  const newOrderData: iWorkOrderResponse = {
    ...orderData,

    id: id,
    start_date: new Date(),
    end_date: new Date(Date.now() + 86400 * 1000),
  };
  database.push(newOrderData);

  return res.status(201).json(newOrderData);
};

const listWorkOrder = (req: Request, res: Response): Response => {
  return res.status(200).json(database);
};

export { createWorkOrder, listWorkOrder };
