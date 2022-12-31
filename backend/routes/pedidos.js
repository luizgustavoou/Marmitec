const express = require("express");
const cors = require("cors");
const conn = require("../conn");
const router = express.Router();

const corsOptions = {
  origin: "*",
};

router.use(cors(corsOptions));

//INÍCIO CONFIGURAÇÃO

router.use(express.json());

//FIM CONFIGURAÇÃO

router.post("/", (req, res) => {
  const { desc, amountProtein } = req.body;

  conn.query(
    {
      sql: "INSERT INTO tbPedido(idUsuario, idEntregador, descPedido, qtdeProteina) VALUE(?, ?, ?, ?)",
      values: [1, 1, desc, amountProtein],
    },
    (error, results, fields) => {
      if (error) {
        res.statusCode = 500;
        res.send();
      } else res.send(results);
    }
  );
});

router.get("/teste", (req, res) => {
  conn.query(
    {
      sql: "SELECT * FROM tbUsuario where nomeUsuario = ?",
      values: ["Luiz Gustavo"],
    },
    (error, results, fields) => {
      res.send(results);
    }
  );
});

module.exports = router;
