const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "14032001",
  database: "marmitaria",
});


connection.connect((error) => {
  if (error) console.log("Houve um erroro: " + err);
  else console.log("Banco de dados conectado com sucesso!");
});

module.exports = connection;
