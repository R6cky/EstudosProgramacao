interface iWorkOrderRequest {
  description: string;
  mechanical: string;
  client: string;
  price: number;
}

interface iWorkOrderResponse extends iWorkOrderRequest {
  start_date: Date;
  end_date: Date;
  id: string;
}

type tDatabase = Array<iWorkOrderResponse>;

export { iWorkOrderRequest, iWorkOrderResponse, tDatabase };
