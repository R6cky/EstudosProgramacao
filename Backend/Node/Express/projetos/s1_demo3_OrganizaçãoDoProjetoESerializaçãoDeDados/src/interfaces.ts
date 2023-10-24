interface iWorkOrderRequest {
  description: string;
  mechanical: string;
  client: string;
  price: number;
}

interface iWorkOrderResponse extends iWorkOrderRequest {
  start_date: Date;
  end_date: Date;
  id: number;
}

type tDatabase = Array<iWorkOrderResponse>;

type tWorkOrdersRequiredKeys =
  | "description"
  | "mechanical"
  | "client"
  | "price";

export {
  iWorkOrderRequest,
  iWorkOrderResponse,
  tDatabase,
  tWorkOrdersRequiredKeys,
};
