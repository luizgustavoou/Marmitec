//app.js: arquivo de configuração da aplicação Express;

const express = require("express");
const cors = require("cors");
const app = express();

const pedidos = require("./routes/pedidos");

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

module.exports = app;
