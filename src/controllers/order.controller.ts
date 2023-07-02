import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import RequestExt from "../interface/req-ext";

const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({data: "esto solo lo ven las personas logeadas",
        user: req.user
      })
      } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS", e);
      }
};



export { getItems };
