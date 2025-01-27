import { Model } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName?: string; // Optional middle name
  lastName: string;
};

export type TUser = {
  _id: string;
  name: TUserName;
  email: string;
  password: string;
  contact: string;
  role: "user" | "admin";
  profileImage: string;
  status: "active" | "inActive";
  totalFollower: number;
  followersId: Array<string>;
  isVerified: boolean;
  isDeleted: boolean;
};

export type TUserUpdate = Partial<TUser>;

export interface TUserModel extends Model<TUser> {
  isUserExistByEmail(email: string): Promise<TUser | null>;
}

export type TUserRole = "user" | "admin";
