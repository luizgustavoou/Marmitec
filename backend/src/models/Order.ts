import { DataTypes } from "sequelize";
import sequelize from "./db";
import User from "./User";
import Deliveryman from "./Deliveryman";
import { OrderModel } from "../interfaces/Order";
import { ValidationOptions } from "sequelize/types/instance-validator";
import emitterOrder from "../utils/emitterOrder";

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

Order.addHook("afterUpdate", async (instance: OrderModel, options) => {
  const orders = await Order.findAll({
    attributes: {
      exclude: ["UserId", "DeliverymanId"],
    },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName", "adress", "phone"],
      },
      {
        model: Deliveryman,
        attributes: ["id", "firstName", "lastName", "phone"],
      },
    ],
  });

  console.log("opa!");
  

  emitterOrder.emit("orderAction", orders);
});

Order.belongsTo(User);
Order.belongsTo(Deliveryman);

export default Order;
