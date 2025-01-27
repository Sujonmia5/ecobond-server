import express from "express";
import { DataCheck } from "../../middlewares/dataValidation";
import { authZodSchema, UpdatePasswordSchema } from "./auth.validation";
import { authController } from "./auth.controller";

const route = express.Router();

route.post("/login", DataCheck(authZodSchema), authController.signInUser);

route.post(
  "/reset",
  DataCheck(UpdatePasswordSchema),
  authController.resetPassword
);

export const authRoutes = route;
