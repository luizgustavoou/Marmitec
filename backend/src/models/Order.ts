import { DataTypes } from "sequelize";
import sequelize from "./db";
import User from "./User";
import Deliveryman from "./Deliveryman";
import { OrderModel } from "../interfaces/Order";

const Order = sequelize.define<OrderModel>("Order", {
  description: {
    type: DataTypes.STRING,
  },
  fraMilanesa: {
    type: DataTypes.SMALLINT,
  },
  fraAssado: {
    type: DataTypes.SMALLINT,
  },
  figaAce: {
    type: DataTypes.SMALLINT,
  },
  bisSuiAce: {
    type: DataTypes.SMALLINT,
  },
  fraMolho: {
    type: DataTypes.SMALLINT,
  },
  arrozRefo: {
    type: DataTypes.SMALLINT,
  },
  arrozLeite: {
    type: DataTypes.SMALLINT,
  },
  macarrao: {
    type: DataTypes.SMALLINT,
  },
  legSalte: {
    type: DataTypes.SMALLINT,
  },
  salaCrua: {
    type: DataTypes.SMALLINT,
  },
  macaCozida: {
    type: DataTypes.SMALLINT,
  },
  feijao: {
    type: DataTypes.SMALLINT,
  },
  status: {
    type: DataTypes.SMALLINT,
    defaultValue: 1,
    allowNull: false,
  },
  canceled: {
    type: DataTypes.SMALLINT,
    defaultValue: 0,
    allowNull: false,
  },
});

Order.belongsTo(User);
Order.belongsTo(Deliveryman);

export default Order;
