import { Request } from "express";
import { ObjectId } from "mongoose";

export enum UserRole {
  User = "user",
  Admin = "admin",
}

export interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  refreshToken: string;
}

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}
