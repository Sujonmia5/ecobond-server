import { z } from "zod";
import { Types } from "mongoose";

// Custom validator for MongoDB ObjectId
const objectIdSchema = z.string().refine((val) => Types.ObjectId.isValid(val), {
  message: "Invalid ObjectId format",
});

// Comment Validation Schema
export const commentSchema = z.object({
  postId: objectIdSchema,
  comment: z
    .string()
    .min(1, "Comment cannot be empty")
    .max(500, "Comment too long"),
  replyId: objectIdSchema.optional().nullable(),
});
