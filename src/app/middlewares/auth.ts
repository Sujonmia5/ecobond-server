import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { JwtPayload } from "../interface/utils";
import { MUser } from "../modules/user/user.model";

const auth = (...userRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const cooke = req.headers.cookie;
    const token = req.headers.authorization;

    if (!token && token !== cooke) {
      throw new Error("you are not authorized user!");
    }
    const user = jwt.verify(
      token as string,
      config.jwt_secret as string,
      {
        expiresIn: config.jwt_expires,
      } as jwt.SignOptions
    ) as JwtPayload;

    if (!user) {
      throw new Error("Invalid token");
    }
    const isUser = await MUser.isUserExistByEmail(user.email);
    if (!isUser || isUser.isDeleted) {
      throw new Error("User does not exist");
    }

    if (userRole.length > 0 && !userRole.includes(user?.role)) {
      throw new Error("You are not authorized to access this route");
    }

    req.user = user;
    next();
  });
};

export default auth;
