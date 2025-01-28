import status from "http-status";
import { config } from "../../config";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { authService } from "./auth.services";

const signInUser = catchAsync(async (req, res) => {
  const data = req.body;
  const { token, user } = await authService.signInUserIntoDB(data);

  res.cookie("token", token, {
    httpOnly: true,
    secure: config.NODE_DEV === "development", // true for https only
  });
  sendResponse(res, {
    success: true,
    message: "User signed in successfully",
    statusCode: 200,
    token,
    data: user,
  });
});

const resetPassword = catchAsync(async (req, res) => {
  const user = req.user;
  const data = {
    newPassword: req.body.newPassword as string,
    email: user?.email || "",
  };
  await authService.resetPasswordIntoDB(data);
  sendResponse(res, {
    success: true,
    message: "Password reset successfully",
    statusCode: status.OK,
    data: null,
  });
});

export const authController = {
  signInUser,
  resetPassword,
};
