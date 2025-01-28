import { z } from "zod";

const PostValidationSchema = z.object({
  content: z.string().max(1000, "Description cannot exceed 1000 characters"),
  imageUrl: z.string().optional(),
});

export default PostValidationSchema;
