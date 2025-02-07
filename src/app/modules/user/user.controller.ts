import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userService } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const { user, token } = await userService.createUserToDB(userData);
  res.cookie("token", token);
  sendResponse(res, {
    success: true,
    data: user,
    token,
    message: "User created successfully",
    statusCode: 201,
  });
});

const getUser = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await userService.getUserFromDB(query);
  sendResponse(res, {
    success: true,
    data: result,
    message: "User retrive successfully",
    statusCode: 201,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const userId = req.params.id;
  const result = await userService.getUserByIdFromDB(userId);
  sendResponse(res, {
    success: true,
    data: result,
    message: "User retrive successfully",
    statusCode: 201,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const result = await userService.updateUserIntoDB(userId, userData);
  sendResponse(res, {
    success: true,
    data: result,
    message: "User updated successfully",
    statusCode: 200,
  });
});
// Exporting the controller functions

export const userController = {
  createUser,
  getUser,
  getUserById,
  updateUser,
} as const;
