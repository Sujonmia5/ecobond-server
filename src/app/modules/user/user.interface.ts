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
  status: string;
  totalFollower: number;
  isVerified: boolean;
  isDeleted: boolean;
};
