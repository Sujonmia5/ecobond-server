import express from "express";
import { DataCheck } from "../../middlewares/dataValidation";
import { authZodSchema, UpdatePasswordSchema } from "./auth.validation";
import { authController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { User_Role } from "../user/user.constents";

const route = express.Router();

route.post("/login", DataCheck(authZodSchema), authController.signInUser);

route.post(
  "/reset",
  auth(User_Role.ADMIN, User_Role.USER),
  DataCheck(UpdatePasswordSchema),
  authController.resetPassword
);

export const authRoutes = route;
