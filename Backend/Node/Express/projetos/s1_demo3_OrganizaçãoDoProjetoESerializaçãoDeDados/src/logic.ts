import { Request, Response } from "express";
import { database } from "./database";
import {
  iWorkOrderRequest,
  iWorkOrderResponse,
  tWorkOrdersRequiredKeys,
} from "./interfaces";

const serializeDataOrderRequest = (payload: any): iWorkOrderRequest => {
  const keys: Array<string> = Object.keys(payload);

  const requiredKeys: Array<tWorkOrdersRequiredKeys> = [
    "description",
    "mechanical",
    "client",
    "price",
  ];

  const containsAllRequired: boolean = requiredKeys.every((key: string) => {
    return keys.includes(key);
  });

  if (!containsAllRequired || Object.keys(payload).length > 4) {
    throw new Error(`Required keys are: ${requiredKeys}`);
  }

  return payload;
};

const createWorkOrder = (req: Request, res: Response): Response => {
  try {
    const id = database.length + 1;
    const orderData: iWorkOrderRequest = serializeDataOrderRequest(req.body);
    const newOrderData: iWorkOrderResponse = {
      ...orderData,

      id: id,
      start_date: new Date(),
      end_date: new Date(Date.now() + 86400 * 1000),
    };
    database.push(newOrderData);

    return res.status(201).json(newOrderData);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Internal server error!",
    });
  }
};

const listWorkOrder = (req: Request, res: Response): Response => {
  return res.status(200).json(database);
};

const deleteWorkOrder = (req: Request, res: Response): Response => {
  const id = Number(req.params.id);
  const findIndex = database.findIndex((elem) => elem.id == id);

  if (findIndex === -1) {
    return res.status(404).json({
      message: "Erro: Não encontrado",
    });
  }
  database.splice(findIndex, 1);
  return res.status(200);
};

export {
  createWorkOrder,
  listWorkOrder,
  serializeDataOrderRequest,
  deleteWorkOrder,
};
