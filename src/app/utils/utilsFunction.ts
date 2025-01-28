import bcrypt from "bcrypt";
import { config } from "../config";
export const matchPassword = async (password: string, hashPassword: string) => {
  return await bcrypt.compare(password, hashPassword);
};

export const bcryptPassword = async (password: string) => {
  return await bcrypt.hash(password, parseInt(config.bcrypt_salt as string));
};
