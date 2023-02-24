import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Mysql conectado com sucesso!");
  } catch (err) {
    console.log(
      "Ocorreu um erro: " + err.message || "Unexpected error connected MySQL"
    );
  }
})();

export default sequelize;
