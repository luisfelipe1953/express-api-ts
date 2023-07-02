import { Car } from "../interface/car.interface";
import ItemModel from "../models/Item";

const insertCar = async (item: Car) => {
  const response = await ItemModel.create(item);
  return response;
};
const getCar = async (id: String) => {
  const response = await ItemModel.findOne({ _id: id });
  return response;
};
const getCars = async () => {
  const response = await ItemModel.find({});
  return response;
};
const updateCar = async (id: string, data: Car) => {
  const response = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};
const deleteCar = async (id: string) => {
  const response = await ItemModel.deleteOne({ _id: id });
  return response;
};

export { insertCar, getCar, getCars, updateCar, deleteCar };
