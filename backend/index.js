//index.js: responsável por subir nosso servidor;
require("dotenv").config();

const app = require("./app");

const server = app.listen(process.env.PORT || 8124, () => {
  console.log(
    `Servidor conectado: http://${process.env.DB_HOST}:${
      process.env.DB_PORT || 8124
    }`
  );
});
