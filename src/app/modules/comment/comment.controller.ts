import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { commentService } from "./comment.service";
import { JwtPayload } from "../../interface/utils";

const createComment = catchAsync(async (req, res) => {
  const user = req.user as JwtPayload;
  const data = req.body;
  const result = await commentService.createCommentIntoDB(data, user);

  sendResponse(res, {
    success: true,
    message: "Comment created successfully",
    data: result,
    statusCode: status.OK,
  });
});

export const commentController = {
  createComment,
};
