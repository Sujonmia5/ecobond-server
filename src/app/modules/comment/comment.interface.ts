import { Types } from "mongoose";

export type TComment = {
  postId: Types.ObjectId;
  userId: Types.ObjectId;
  comment: string;
  replyId?: Types.ObjectId | null;
  isDeleted: boolean;
};
