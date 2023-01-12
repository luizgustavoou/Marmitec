const mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((error) => {
  if (error) console.log("Houve um erroro: " + error);
  else console.log("Banco de dados conectado com sucesso!");
});

module.exports = connection;
