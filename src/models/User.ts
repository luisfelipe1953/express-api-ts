import { Schema, Types, Model, model } from "mongoose";
import { User } from "../interface/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    age: {
        type: Number,
        default: 18
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("users", UserSchema);

export default UserModel;
