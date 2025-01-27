import express from "express";
import { DataCheck } from "../../middlewares/dataValidation";
import { UserSchema } from "./user.validation";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";
import { User_Role } from "./user.constents";

const route = express.Router();

route.get("/:userId", userController.getUserById);

route.get("/", auth(User_Role.USER), userController.getUser);

route.post("/create-user", DataCheck(UserSchema), userController.createUser);

route.put("/:userId", DataCheck(UserSchema), userController.updateUser);

export const userRoutes = route;
