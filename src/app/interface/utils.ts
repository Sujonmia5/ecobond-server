import { TUserRole } from "../modules/user/user.interface";

export type JwtPayload = {
  email: string;
  role: TUserRole;
  iat: number;
  exp: number;
  isVerified: boolean;
};
