import { Response } from "express";

export type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  token?: string;
  data: T;
};

export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const status = data?.statusCode;
  res.status(status).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
    token: data?.token,
  });
};
