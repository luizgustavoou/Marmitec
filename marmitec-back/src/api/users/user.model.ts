import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db";
import { UserModel } from "./types/model";

const User = sequelize.define<UserModel>("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  adress: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
});

export default User;
