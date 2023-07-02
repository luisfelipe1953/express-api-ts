import {  Router } from "express";
import multerMiddleware from "../middleware/file";
import { getFile } from "../controllers/upload.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post('/', checkJwt, multerMiddleware.single("image"), getFile)

export { router };
