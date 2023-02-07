import { DataTypes, Model } from "sequelize";
import sequelize from "./db";

interface User extends Model {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  adress?: string;
  phone?: string;
}

const User = sequelize.define<User>("User", {
  username: {
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
