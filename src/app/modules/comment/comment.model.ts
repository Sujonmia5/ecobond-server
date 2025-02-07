import { model, Schema } from "mongoose";
import { TComment } from "./comment.interface";

// Mongoose Schema
const CommentSchema = new Schema<TComment>(
  {
    postId: { type: Schema.Types.ObjectId, ref: "post", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    comment: { type: String, required: true, trim: true },
    replyId: { type: Schema.Types.ObjectId, ref: "comment", default: null },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Comment Model
export const MComment = model<TComment>("comment", CommentSchema);
