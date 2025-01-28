import { createToken } from "../../utils/jwtFunction";
import { bcryptPassword, matchPassword } from "../../utils/utilsFunction";
import { MUser } from "../user/user.model";

const signInUserIntoDB = async (data: Record<string, string>) => {
  const { email, password } = data;
  const user = await MUser.isUserExistByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await matchPassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid Password");
  }
  if (user.isDeleted) {
    throw new Error("User has been deleted");
  }
  if (user.status === "inActive") {
    throw new Error("User is Deactived");
  }
  const token = createToken(user);
  if (!token) {
    throw new Error("Token not generated");
  }
  return {
    token,
    user,
  };
};
const resetPasswordIntoDB = async (data: {
  email: string;
  newPassword: string;
}) => {
  const hasPassword = await bcryptPassword(data.newPassword);
  const user = await MUser.isUserExistByEmail(data.email);
  if (!user || user?.isDeleted) {
    throw new Error("user does not exist");
  }

  const result = await MUser.updateOne(
    {
      _id: user._id,
    },
    {
      password: hasPassword,
    },
    {
      new: true,
    }
  );
  return result;
};

export const authService = {
  signInUserIntoDB,
  resetPasswordIntoDB,
} as const;
