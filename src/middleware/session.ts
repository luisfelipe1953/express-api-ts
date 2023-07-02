import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import RequestExt from "../interface/req-ext";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtUser = req.headers.authorization || "";
    const jwt = jwtUser.split(" ").pop();

    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401).send("SESSION_IS_NOT_VALID");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400).send("SESSION_NOT_VALID");
  }
};

export { checkJwt };
