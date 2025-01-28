import { Types } from "mongoose";

export type TPost = {
  userId: Types.ObjectId;
  content: string;
  imageUrl: string;
  totalComment: number;
  totalVote: number;
  isDeleted: boolean;
};
