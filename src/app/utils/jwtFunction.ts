import jwt from "jsonwebtoken";
import { config } from "../config";
import { TUser } from "../modules/user/user.interface";

export const createToken = (user: TUser): string => {
  const tokenData = {
    email: user.email,
    role: user.role,
    isVerified: user.isVerified,
  };
  // generate JWT token here
  const token = jwt.sign(
    tokenData,
    config.jwt_secret as jwt.Secret,
    {
      expiresIn: config.jwt_expires,
    } as jwt.SignOptions
  );

  return token;
};
