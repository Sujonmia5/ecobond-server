import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";

export const DataCheck = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    await schema.parseAsync(body);
    next();
  });
};
