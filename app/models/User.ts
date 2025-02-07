import { Schema, model, Model } from "mongoose";
import {IUser} from "../@types/IUser"

const UserSchema = new Schema<IUser>(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["admin", "user"], default: "user" },
        profilePicture: { type: String, default: "", trim: true },
    },
    { timestamps: true }
);

const User: Model<IUser> = model<IUser>("User", UserSchema);

export default User;
