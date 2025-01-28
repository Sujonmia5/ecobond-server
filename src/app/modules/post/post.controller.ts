import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { postService } from "./post.service";

const createPost = catchAsync(async (req, res) => {
  const postData = req.body;
  const result = await postService.createPostIntoDB(postData);
  sendResponse(res, {
    success: true,
    message: "Post created successfully",
    data: result,
    statusCode: status.OK,
  });
});

const getAllPost = catchAsync(async (req, res) => {
  const query = req.query;
  const posts = await postService.getAllPostFromDB(query);
  sendResponse(res, {
    success: true,
    data: posts,
    message: "All posts retrieved successfully",
    statusCode: status.OK,
  });
});

const getPostById = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const post = await postService.getPostByIdFromDB(postId);
  sendResponse(res, {
    success: true,
    data: post,
    message: "Post retrieved successfully",
    statusCode: status.OK,
  });
});

const updatePost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const postData = req.body;
  const result = await postService.updatePostIntoDB(postId, postData);
  sendResponse(res, {
    success: true,
    message: "Post updated successfully",
    data: result,
    statusCode: status.OK,
  });
});

export const postController = {
  createPost,
  getAllPost,
  getPostById,
  updatePost,
};
