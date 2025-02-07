import { Types } from "mongoose";

export interface IUser {
    _id: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role: "admin" | "user";
    profilePicture?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
