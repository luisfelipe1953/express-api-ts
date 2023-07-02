import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import RequestExt from "../interface/req-ext";
import { registerUpload } from "../services/storage.services";
import { Storage } from "../interface/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_IMAGE", e);
  }
};

export { getFile };
