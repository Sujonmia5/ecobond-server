import mongoose from "mongoose";
import { JwtPayload } from "../../interface/utils";
import { MUser } from "../user/user.model";
import { TComment } from "./comment.interface";
import { MComment } from "./comment.model";
import { MPost } from "../post/post.model";

const createCommentIntoDB = async (data: TComment, user: JwtPayload) => {
  const userInfo = await MUser.isUserExistByEmail(user.email);
  const comment: TComment = {
    ...data,
  };
  if (userInfo && userInfo._id) {
    comment.userId = new mongoose.Types.ObjectId(userInfo._id);
  }
  try {
    const result = await MComment.create(comment);
    if (!result) {
      throw new Error("Failed to create comment");
    }

    const post = await MPost.findByIdAndUpdate(result.postId, {
      $inc: { totalComment: 1 },
    });

    if (!post) {
      throw new Error("Failed to create comment");
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const commentService = {
  createCommentIntoDB,
};
