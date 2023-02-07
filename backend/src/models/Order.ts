import { DataTypes } from "sequelize";
import sequelize from "./db";
import User from "./User";
import Deliveryman from "./Deliveryman";

const Order = sequelize.define("Order", {
  description: {
    type: DataTypes.STRING,
  },
  fraMilanesa: {
    type: DataTypes.INTEGER,
  },
  fraAssado: {
    type: DataTypes.INTEGER,
  },
  figaAce: {
    type: DataTypes.INTEGER,
  },
  bisSuiAce: {
    type: DataTypes.INTEGER,
  },
  fraMolho: {
    type: DataTypes.INTEGER,
  },
  arrozRefo: {
    type: DataTypes.INTEGER,
  },
  arrozLeite: {
    type: DataTypes.INTEGER,
  },
  macarrao: {
    type: DataTypes.INTEGER,
  },
  legSalte: {
    type: DataTypes.INTEGER,
  },
  salaCrua: {
    type: DataTypes.INTEGER,
  },
  macaCozida: {
    type: DataTypes.INTEGER,
  },
  feijao: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  canceled: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
});

Order.belongsTo(User);
Order.belongsTo(Deliveryman);


export default Order;
