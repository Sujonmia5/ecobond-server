import { TPost } from "./post.interface";
import { MPost } from "./post.model";

const createPostIntoDB = async (data: TPost) => {
  //implement logic to create post into database
  const result = await MPost.create(data);
  return result;
};

const getAllPostFromDB = async (query: Record<string, unknown>) => {
  //implement logic to get all post from database
  const result = await MPost.find({});
  return result;
};

const getPostByIdFromDB = async (id: string) => {
  const result = await MPost.findById(id);
  return result;
};
const updatePostIntoDB = async (id: string, data: Partial<TPost>) => {
  const result = await MPost.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const postService = {
  createPostIntoDB,
  getAllPostFromDB,
  getPostByIdFromDB,
  updatePostIntoDB,
};
