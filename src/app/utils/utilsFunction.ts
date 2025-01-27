import bcrypt from "bcrypt";
export const matchPassword = async (password: string, hashPassword: string) => {
  return await bcrypt.compare(password, hashPassword);
};
