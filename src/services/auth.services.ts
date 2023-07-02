import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/User";
import { encrypt, verified } from "../utils/bcrypt.hanlde";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (data: User) => {
  const { email, password } = data;

  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";

  const passHash = await encrypt(password);

  const registerNewUser = await UserModel.create({
    ...data,
    password: passHash,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.email)
  
  const data = {
    token,
    user: checkIs,
  };
  
  return data;
};

export { registerNewUser, loginUser };
