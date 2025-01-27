import mongoose, { Schema } from 'mongoose';
import { TUser, TUserName } from './user.interface';

const UserNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
});

const UserSchema = new Schema<TUser>(
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
      enum: ['user', 'admin'],
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    totalFollower: {
      type: Number,
      default: 0,
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
  },
);

export const MUser = mongoose.model<TUser>('user', UserSchema);
