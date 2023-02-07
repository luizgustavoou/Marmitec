import { Schema, model } from "mongoose";
import { UserInterface } from "../interfaces/User";

const UserSchema = new Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.fullName = function (): string {
  return this.firstName + " " + this.fullName;
};

export default model<UserInterface>("User", UserSchema);
