import mongoose, { Schema } from "mongoose";
import { TPost } from "./post.interface";

const PostSchema = new Schema<TPost>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    content: {
      type: String,
      required: false,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    totalComment: {
      type: Number,
      required: true,
      default: 0,
    },
    totalVote: {
      type: Number,
      required: true,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const MPost = mongoose.model("post", PostSchema);
