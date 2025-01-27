import { createToken } from "../../utils/jwtFunction";
import { TUser } from "./user.interface";
import { MUser } from "./user.model";

const createUserToDB = async (data: TUser) => {
  const user: TUser = {
    ...data,
  };
  user.status = "active";
  const result = await MUser.create(data);
  if (!result) {
    throw new Error("Failed to create user");
  }
  const token = createToken(user);
  return {
    token,
    user: result,
  };
};
const getUserFromDB = async (query: Record<string, unknown>) => {
  // eslint-disable-next-line no-console
  console.log(query);
  const result = await MUser.find({});
  return result;
};

const getUserByIdFromDB = async (id: string) => {
  const result = await MUser.findById(id);
  return result;
};

const updateUserIntoDB = async (id: string, data: TUser) => {
  const result = await MUser.updateOne(
    {
      _id: id,
    },
    data,
    { new: true }
  );
  return result;
};

export const userService = {
  createUserToDB,
  getUserFromDB,
  getUserByIdFromDB,
  updateUserIntoDB,
} as const;
