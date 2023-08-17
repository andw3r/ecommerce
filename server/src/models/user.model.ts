import mongoose, { Document, Schema } from "mongoose";
import { IUser, UserRole } from "../types/users";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 32,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  role: {
    type: String,
    enum: [UserRole.User, UserRole.Admin],
    default: UserRole.User,
  },
  refreshToken: { type: String },
});

const userModel = mongoose.model<IUser & Document>("User", UserSchema);
export default userModel;
