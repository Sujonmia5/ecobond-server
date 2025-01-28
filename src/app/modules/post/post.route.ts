import express from "express";
import { DataCheck } from "../../middlewares/dataValidation";
import PostValidationSchema from "./post.validation";
import { postController } from "./post.controller";
const route = express.Router();

route.get("/:postId", postController.getPostById);
route.post(
  "/create-post",
  DataCheck(PostValidationSchema),
  postController.createPost
);

route.get("/", postController.getAllPost);

route.put(
  "/:postId",
  DataCheck(PostValidationSchema),
  postController.updatePost
);

export const postRoutes = route;
