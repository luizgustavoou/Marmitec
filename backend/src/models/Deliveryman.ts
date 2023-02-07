import { DataTypes } from "sequelize";
import sequelize from "./db";

const Deliveryman = sequelize.define("Deliveryman", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
});


export default Deliveryman;
