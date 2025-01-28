import mongoose, { Schema } from "mongoose";
import { TUser, TUserModel, TUserName } from "./user.interface";
import bcrypt from "bcrypt";
import { config } from "../../config";

const UserNameSchema = new Schema<TUserName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
  },
  {
    _id: false,
    versionKey: false,
  }
);

const UserSchema = new Schema<TUser, TUserModel>(
  {
    name: {
      type: UserNameSchema,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
    profileImage: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inActive"],
      required: true,
      default: "active",
    },
    totalFollower: {
      type: Number,
      default: 0,
    },
    followersId: {
      type: [String],
      default: [],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    parseInt(config.bcrypt_salt as string)
  );
  next();
});

UserSchema.pre("find", async function (next) {
  this.find({ isDelete: { $ne: true } });
  next();
});

UserSchema.statics.isUserExistByEmail = async function (email) {
  return await this.findOne({ email });
};

export const MUser = mongoose.model<TUser, TUserModel>("user", UserSchema);
