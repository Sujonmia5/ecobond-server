import express from "express";
import { DataCheck } from "../../middlewares/dataValidation";
import { commentSchema } from "./comment.validation";
import { commentController } from "./comment.controller";

const router = express.Router();

// Routes
router.post("/save", DataCheck(commentSchema), commentController.createComment);
router.get("/:postId"); // Get comments for a post
router.delete("/:commentId");

export const commentRoutes = router;
