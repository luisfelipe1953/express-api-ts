import { Router } from "express";
import {
  getItem,
  getItems,
  postItem,
  updateItem,
  deleteItem,
} from "../controllers/item.controller";

const router = Router();

router.get("/:id", getItem);

router.get("/", getItems);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export { router };
