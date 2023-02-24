import { Sequelize } from "sequelize";

const sequelize = new Sequelize("marmitariav2", "root", "14032001", {
  host: "localhost",
  dialect: "mysql",
});


export default sequelize;
