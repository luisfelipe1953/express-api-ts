import { Car } from "../interface/car.interface";
import ItemModel from "../models/Item";

const getOrders = async () => {
  const response = await ItemModel.find({});
  return response;
};

export { getOrders };
