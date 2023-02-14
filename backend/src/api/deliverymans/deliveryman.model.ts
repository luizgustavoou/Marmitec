import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db";
import { DeliverymanModel } from "../../interfaces/Deliveryman";

const Deliveryman = sequelize.define<DeliverymanModel>("Deliveryman", {
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
