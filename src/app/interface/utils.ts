import { TUserRole } from "../modules/user/user.interface";

export type JwtPayload = {
  email: string;
  role: TUserRole;
  _id: string;
  iat: number;
  exp: number;
  isVerified: boolean;
};
