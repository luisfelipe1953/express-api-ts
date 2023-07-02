import { Schema, Types, Model, model } from "mongoose";
import { Storage } from "../interface/storage.interface";

const StorageSchema = new Schema<Storage>(
    {   
      fileName: {
        type: String,
      },
      idUser: {
        type: String,
      },
      path: {
        type: String,
      }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const StorageModel = model("storage", StorageSchema)

export default StorageModel