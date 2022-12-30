const conn = require("./conn");
const pedidos = require("./routes/pedidos");
const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
};

//INICÍO Configuração
app.use("/pedidos", pedidos);

app.use(express.json());

app.use(cors(corsOptions));
//FIM CONFIGURAÇÃO

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(8124, () => {
  console.log("Servidor conectado: http://localhost:8124");

  // conn.query("SELECT * FROM tbUsuario", (error, results, fields) => {
  //   if (error) throw error;

  //   console.log(results);
  //   console.log(results[0].nomeUsuario);
  // });
});
